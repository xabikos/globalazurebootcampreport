using System.Threading.Tasks;
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

        public void SaveTweet(Tweet tweet)
        {
            var insertOperation = TableOperation.Insert(tweet);
            _table.Execute(insertOperation);
        }

    }
}