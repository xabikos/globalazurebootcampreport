using System;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using GlobalAzureBootcampReport.Azure;
using GlobalAzureBootcampReport.Hubs;
using GlobalAzureBootcampReport.Models;
using GlobalAzureBootcampReport.Twitter;
using Microsoft.AspNet.Identity;
using Microsoft.AspNet.Identity.Owin;
using Microsoft.AspNet.SignalR;

namespace GlobalAzureBootcampReport.Controllers
{
    public class HomeController : Controller
    {
        private readonly ITwitterManager _twitterManager;
        private readonly ITweetsRepository _tweetsRepository;

        private readonly Lazy<IHubContext> _context =
            new Lazy<IHubContext>(() => GlobalHost.ConnectionManager.GetHubContext<UsersStatsHub>());

        public HomeController(ITwitterManager twitterManager, ITweetsRepository tweetsRepository)
        {
            _twitterManager = twitterManager;
            _tweetsRepository = tweetsRepository;
        }

        public ActionResult Index()
        {
            var stats = _tweetsRepository.GetTopUserStats(10);
            ApplicationUser user = null;
            if (User.Identity.IsAuthenticated)
            {
                user = Request.GetOwinContext().GetUserManager<ApplicationUserManager>().FindByName(User.Identity.Name);
            }
            return View(new IndexViewModel
            {
                UsersStats = stats,
                User = user
            });
        }

        public ActionResult DummyUpdate()
        {
            var stats = _tweetsRepository.GetTopUserStats(10).Reverse();
            _context.Value.Clients.All.updateUsersStats(stats);
            return new EmptyResult();
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
