using System.Threading.Tasks;
using GlobalAzureBootcampReport.Azure;
using Tweetinvi;

namespace GlobalAzureBootcampReport.Twitter
{
    /// <summary>
    /// Implementation of <see cref="ITwitterManager"/>
    /// </summary>
    internal class TwitterManager : ITwitterManager
    {
        private readonly ITweetsRepository _repository;

        public TwitterManager(ITweetsRepository repository)
        {
            _repository = repository;
        }

        public void StartListening()
        {

            var stream = Stream.CreateFilteredStream();
            stream.AddTrack("#GlobalAzure");

            stream.MatchingTweetReceived += (sender, args) =>
            {
                _repository.SaveTweet(new Models.Tweet(args.Tweet.Creator.IdStr, args.Tweet.Id.ToString())
                {
                    User = args.Tweet.Creator.Name,
                    Text = args.Tweet.Text,
                    Country = args.Tweet.Place != null ? args.Tweet.Place.Country : string.Empty
                });
            };
            Task.Factory.StartNew(stream.StartStreamMatchingAllConditions);

        }
    }
}