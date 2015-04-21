using System;
using System.Collections.Generic;
using System.Threading.Tasks;
using GlobalAzureBootcampReport.Azure;
using GlobalAzureBootcampReport.Hubs;
using GlobalAzureBootcampReport.Redis;
using Microsoft.AspNet.SignalR;
using Tweetinvi;
using Tweetinvi.Core.Interfaces;
using Tweetinvi.Core.Interfaces.Streaminvi;

namespace GlobalAzureBootcampReport.Twitter
{
    /// <summary>
    /// Implementation of <see cref="ITwitterManager"/>
    /// </summary>
    internal class TwitterManager : ITwitterManager
    {
        //private readonly Lazy<IHubContext> _context =
        //    new Lazy<IHubContext>(() => GlobalHost.ConnectionManager.GetHubContext<BootcampHub>());

        private const int BatchSize = 5;
        private int _counter = 0;
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

            _stream = Stream.CreateFilteredStream();
            _stream.AddTrack("#SheBadOnRadio");

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
            };
            Task.Factory.StartNew(_stream.StartStreamMatchingAllConditions);
        }

        private void UpdateStatisticsAndClients(Models.Tweet tweet)
        {
            _counter++;
            _tweetsCache.Add(tweet);
            if (_counter == BatchSize)
            {
                _counter = 0;
                //_context.Value.Clients.All.updateTweetsList(_tweetsCache);
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
            await _cache.SetItemAsync(_cache.UsersStatsKey, usersStats);
        }
    }
}