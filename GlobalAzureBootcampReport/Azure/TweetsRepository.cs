using System;
using System.Collections.Generic;
using System.Linq;
using GlobalAzureBootcampReport.Models;
using Microsoft.WindowsAzure.Storage.Table;

namespace GlobalAzureBootcampReport.Azure
{
    /// <summary>
    /// Implementation of <see cref="ITweetsRepository"/>
    /// </summary>
    internal class TweetsRepository : ITweetsRepository
    {
        const string TableName = "Tweets";
        private readonly CloudTable _table;

        public TweetsRepository()
        {
            _table = AzureHelper.GetTableReference(TableName);
        }

        public IEnumerable<UserStat> GetTopUserStats(int topUsers)
        {
            var query = new TableQuery<Tweet>();
            var tweets = _table.ExecuteQuery(query);
            return
                tweets.GroupBy(t => t.User, (key, g) => new UserStat {Name = key, TweetsNumber = g.Count()})
                    .OrderBy(g => g.TweetsNumber)
                    .Take(topUsers);
        }

        public IEnumerable<Tweet> GetLatestTweets()
        {
            var oneHourAgoTimestap = new DateTimeOffset(DateTime.UtcNow.AddMinutes(-60));
            var query =
                new TableQuery<Tweet>().Where(TableQuery.GenerateFilterConditionForDate("Timestamp",
                    QueryComparisons.GreaterThan, oneHourAgoTimestap));
            return _table.ExecuteQuery(query);
        }
        
        public void SaveTweet(Tweet tweet)
        {
            var insertOperation = TableOperation.Insert(tweet);
            _table.Execute(insertOperation);
        }

    }
}