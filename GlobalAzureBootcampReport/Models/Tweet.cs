using System;
using Microsoft.WindowsAzure.Storage.Table;

namespace GlobalAzureBootcampReport.Models
{
    public class Tweet : TableEntity
    {
        public Tweet(string user, string id)
        {
            PartitionKey = user;
            RowKey = id;
        }

        public string User { get; set; }

        public string Text { get; set; }

        public string Country { get; set; }

    }
}