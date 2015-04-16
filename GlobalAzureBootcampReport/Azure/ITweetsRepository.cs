using System;
using System.Collections.Generic;
using GlobalAzureBootcampReport.Models;

namespace GlobalAzureBootcampReport.Azure
{
    /// <summary>
    /// Repository responsible for data access code of <see cref="Tweet"/>
    /// </summary>
    public interface ITweetsRepository
    {
        /// <summary>
        /// Returns a collection with the top users stats based on the supplied <paramref name="topUsers"/>
        /// </summary>
        IEnumerable<UserStat> GetTopUserStats(int topUsers);

        /// <summary>
        /// Stores asynchronously the supplied <paramref name="tweet"/>
        /// </summary>
        void SaveTweet(Tweet tweet);

    }
}