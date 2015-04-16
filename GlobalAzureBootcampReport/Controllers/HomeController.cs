using System;
using System.Web.Mvc;
using GlobalAzureBootcampReport.Azure;
using GlobalAzureBootcampReport.Twitter;

namespace GlobalAzureBootcampReport.Controllers
{
    public class HomeController : Controller
    {
        private readonly ITwitterManager _twitterManager;
        private readonly ITweetsRepository _tweetsRepository;

        public HomeController(ITwitterManager twitterManager, ITweetsRepository tweetsRepository)
        {
            _twitterManager = twitterManager;
            _tweetsRepository = tweetsRepository;
        }

        public ActionResult Index()
        {
            var stats = _tweetsRepository.GetTopUserStats(10);
            return View(stats);
        }

        public ActionResult StartListening()
        {
            _twitterManager.StartListening();
            return new EmptyResult();
        }

        public ActionResult StopListening()
        {
            _twitterManager.StopListening();
            return new EmptyResult();
        }

    }
}
