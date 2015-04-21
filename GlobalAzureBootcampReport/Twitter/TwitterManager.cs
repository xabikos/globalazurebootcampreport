using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using GlobalAzureBootcampReport.Azure;
using GlobalAzureBootcampReport.Hubs;
using GlobalAzureBootcampReport.Models;
using GlobalAzureBootcampReport.Redis;
using Microsoft.AspNet.SignalR;
using Tweetinvi;
using Tweetinvi.Core.Interfaces.Streaminvi;

namespace GlobalAzureBootcampReport.Twitter
{
    /// <summary>
    /// Implementation of <see cref="ITwitterManager"/>
    /// </summary>
    internal class TwitterManager : ITwitterManager
    {
        private readonly Lazy<IHubContext> _context =
            new Lazy<IHubContext>(() => GlobalHost.ConnectionManager.GetHubContext<BootcampReportHub>());

        private const int BatchSize = 5;
        private int _tweetsCounter, _topUsersCounter;
        private readonly List<Models.Tweet> _tweetsCache = new List<Models.Tweet>(); 

        private readonly ITweetsRepository _repository;
        private readonly ICache _cache;
        private IFilteredStream _stream;

        public TwitterManager(ITweetsRepository repository)
        {
            _repository = repository;
            _cache = new Cache();
        }

        public void StartListening()
        {
            // create the stream only once
            if (_stream == null)
            {
                _stream = Stream.CreateFilteredStream();
                _stream.AddTrack("#GlobalAzure");

                _stream.MatchingTweetReceived += (sender, args) =>
                {
                    var tweet = new Models.Tweet(args.Tweet.Creator.IdStr, args.Tweet.Id.ToString())
                    {
                        User = args.Tweet.Creator.Name,
                        Text = args.Tweet.Text,
                        Country = args.Tweet.Place != null ? args.Tweet.Place.Country : string.Empty
                    };
                    _repository.SaveTweet(tweet);
                    UpdateStatisticsAndClients(tweet);
                    UpdateTweetsAndClients(tweet);
                };
                Task.Factory.StartNew(_stream.StartStreamMatchingAllConditions);
            }
        }

        private void UpdateStatisticsAndClients(Models.Tweet tweet)
        {
            
            var allUsersStatistics = _cache.GetItemAsync<IList<UserStat>>(_cache.AllUsersStatsKey).Result;
            var userStats = allUsersStatistics.FirstOrDefault(us => us.UserId == tweet.UserId);
            // First tweet of the user
            if (userStats == null)
            {
                allUsersStatistics.Add(new UserStat
                {
                    UserId = tweet.UserId,
                    TweetsNumber = 1,
                    Name = tweet.User,
                    Country = tweet.Country
                });
            }
            else
            {
                userStats.TweetsNumber++;
            }
            _cache.SetItemAsync(_cache.AllUsersStatsKey, allUsersStatistics).Wait();

            var newTopUsersStatistics = allUsersStatistics.OrderByDescending(us => us.TweetsNumber).Take(20).ToList();

            var topUsersStatistics = _cache.GetItemAsync<IList<UserStat>>(_cache.TopUsersStatsKey).Result;

            if (topUsersStatistics.Count < 20 ||
                topUsersStatistics.Intersect(newTopUsersStatistics, new UserStatComparer()).Any())
            {
                _topUsersCounter++;
                _cache.SetItemAsync(_cache.TopUsersStatsKey, newTopUsersStatistics).Wait();
            }

            if (_topUsersCounter == BatchSize)
            {
                _topUsersCounter = 0;
                _context.Value.Clients.All.updateUsersStats(newTopUsersStatistics);
            }
        }

        private void UpdateTweetsAndClients(Models.Tweet tweet)
        {
            _tweetsCounter++;
            _tweetsCache.Add(tweet);
            if (_tweetsCounter == BatchSize)
            {
                _tweetsCounter = 0;
                _context.Value.Clients.All.addTweetsToList(_tweetsCache);
                _tweetsCache.Clear();
            }
        }

        public void StopListening()
        {
            if (_stream != null)
            {
                _stream.StopStream();
            }
        }

        public async Task CalculateStats()
        {
            var usersStats = _repository.GetUserStats();
            await _cache.SetItemAsync(_cache.AllUsersStatsKey, usersStats);
            await
                _cache.SetItemAsync(_cache.TopUsersStatsKey,
                    usersStats.OrderByDescending(us => us.TweetsNumber).Take(20).ToList());
        }
    }
}