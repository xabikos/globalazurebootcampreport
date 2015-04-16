using System;
using System.Web.Mvc;
using GlobalAzureBootcampReport.Twitter;

namespace GlobalAzureBootcampReport.Controllers
{
    public class HomeController : Controller
    {
        private readonly ITwitterManager _twitterManager;

        public HomeController(ITwitterManager twitterManager)
        {
            _twitterManager = twitterManager;
        }

        public ActionResult Index()
        {
            return View();
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
