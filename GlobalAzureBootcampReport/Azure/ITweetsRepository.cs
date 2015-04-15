using System;
using System.Threading.Tasks;
using GlobalAzureBootcampReport.Models;

namespace GlobalAzureBootcampReport.Azure
{
    /// <summary>
    /// Repository responsible for data access code of <see cref="Tweet"/>
    /// </summary>
    public interface ITweetsRepository
    {

        /// <summary>
        /// Stores asynchronously the supplied <paramref name="tweet"/>
        /// </summary>
        void SaveTweet(Tweet tweet);

    }
}