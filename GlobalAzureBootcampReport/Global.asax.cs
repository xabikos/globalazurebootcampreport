using System;
using System.Configuration;
using System.Web.Http;
using System.Web.Mvc;
using System.Web.Optimization;
using System.Web.Routing;
using Tweetinvi;

namespace GlobalAzureBootcampReport
{
    public class WebApiApplication : System.Web.HttpApplication
    {
        protected void Application_Start()
        {
            AreaRegistration.RegisterAllAreas();
            GlobalConfiguration.Configure(WebApiConfig.Register);
            FilterConfig.RegisterGlobalFilters(GlobalFilters.Filters);
            RouteConfig.RegisterRoutes(RouteTable.Routes);
            BundleConfig.RegisterBundles(BundleTable.Bundles);

            ConnectToTwitter();
        }

        private static void ConnectToTwitter()
        {
            var userAccessToken = ConfigurationManager.AppSettings["UserAccessToken"];
            var userAccessSecret = ConfigurationManager.AppSettings["UserAccessSecret"];
            var consumerKey = ConfigurationManager.AppSettings["ConsumerKey"];
            var consumerSecret = ConfigurationManager.AppSettings["ConsumerSecret"];
            TwitterCredentials.SetCredentials(userAccessToken, userAccessSecret, consumerKey, consumerSecret);
        }
    }

}