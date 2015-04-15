using System;

namespace GlobalAzureBootcampReport.Twitter
{
    /// <summary>
    /// Contains the methods for interacting with Twitter api
    /// </summary>
    public interface ITwitterManager
    {
        /// <summary>
        /// Starts listening on Twitter stream.
        /// </summary>
        void StartListening();
    }
}