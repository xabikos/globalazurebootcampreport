using System.Threading.Tasks;
using GlobalAzureBootcampReport.Azure;
using Tweetinvi;
using Tweetinvi.Core.Interfaces.Streaminvi;

namespace GlobalAzureBootcampReport.Twitter
{
    /// <summary>
    /// Implementation of <see cref="ITwitterManager"/>
    /// </summary>
    internal class TwitterManager : ITwitterManager
    {
        private readonly ITweetsRepository _repository;
        private IFilteredStream _stream;

        public TwitterManager(ITweetsRepository repository)
        {
            _repository = repository;
        }

        public void StartListening()
        {

            _stream = Stream.CreateFilteredStream();
            _stream.AddTrack("#MOTAVATORMONDAY");

            _stream.MatchingTweetReceived += (sender, args) =>
            {
                _repository.SaveTweet(new Models.Tweet(args.Tweet.Creator.IdStr, args.Tweet.Id.ToString())
                {
                    User = args.Tweet.Creator.Name,
                    Text = args.Tweet.Text,
                    Country = args.Tweet.Place != null ? args.Tweet.Place.Country : string.Empty
                });
            };
            Task.Factory.StartNew(_stream.StartStreamMatchingAllConditions);
            
        }

        public void StopListening()
        {
            if (_stream != null)
            {
                _stream.StopStream();
            }
        }

    }
}