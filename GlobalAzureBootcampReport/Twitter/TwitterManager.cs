using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Net.Http;
using System.Threading.Tasks;
using GlobalAzureBootcampReport.Azure;
using GlobalAzureBootcampReport.Hubs;
using GlobalAzureBootcampReport.Models;
using GlobalAzureBootcampReport.Redis;
using Microsoft.AspNet.SignalR;
using Tweetinvi.Core.Enum;
using Tweetinvi.Core.Interfaces;
using Tweetinvi.Core.Interfaces.Streaminvi;
using Stream = Tweetinvi.Stream;

namespace GlobalAzureBootcampReport.Twitter
{
    /// <summary>
    /// Implementation of <see cref="ITwitterManager"/>
    /// </summary>
    internal class TwitterManager : ITwitterManager
    {
        private const string ImagesContainerName = "profileimages";

        private static readonly string StorageAccountPrefix =
            AzureHelper.CloudStorageAccount.BlobStorageUri.PrimaryUri.ToString().TrimEnd(new[] {'/'});

        private readonly Lazy<IHubContext> _context =
            new Lazy<IHubContext>(() => GlobalHost.ConnectionManager.GetHubContext<BootcampReportHub>());

        private const int BatchSize = 5;
        private int _tweetsCounter, _topUsersCounter;
        private readonly List<Tweet> _tweetsCache = new List<Tweet>(); 

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
                _stream.AddTrack("#earthday");

                _stream.MatchingTweetReceived += (sender, args) =>
                {
                    var tweet = new Tweet(args.Tweet.Creator.IdStr, args.Tweet.Id.ToString())
                    {
                        User = args.Tweet.Creator.Name,
                        ScreenName = args.Tweet.Creator.ScreenName,
                        Text = args.Tweet.Text,
                        Country = args.Tweet.Place != null ? args.Tweet.Place.Country : string.Empty
                    };
                    _repository.SaveTweet(tweet);
                    CheckForNewUserAndStoreImage(args.Tweet);
                    UpdateStatisticsAndClients(tweet);
                    UpdateTweetsAndClients(tweet);
                };

                //_stream.StreamStopped += (sender, args) => Task.Factory.StartNew(_stream.StartStreamMatchingAllConditions);

                Task.Factory.StartNew(_stream.StartStreamMatchingAllConditions);
            }
        }

        private void CheckForNewUserAndStoreImage(ITweet tweet)
        {
            var user = tweet.Creator;
            var allUsersStatistics = _cache.GetItemAsync<IList<UserStat>>(_cache.AllUsersStatsKey).Result;
            // Check if a new user
            if (allUsersStatistics.All(us => us.UserId != user.IdStr))
            {
                using (var client = new HttpClient())
                {
                    var profileImage = client.GetByteArrayAsync(user.ProfileImageUrl).Result;
                    var container = AzureHelper.GetContainerReference(ImagesContainerName);
                    var blob = container.GetBlockBlobReference(user.IdStr);
                    using(var stream = new MemoryStream(profileImage))
                    blob.UploadFromStream(stream);
                }
            }
        }

        private void UpdateStatisticsAndClients(Tweet tweet)
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
                    ProfileUrl = "https://www.twitter.com/" + tweet.ScreenName,
                    Country = tweet.Country,
                    ImageUrl = string.Format("{0}/{1}/{2}",
                        StorageAccountPrefix, ImagesContainerName, tweet.UserId)
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