using System;
using Microsoft.Owin;
using Owin;

[assembly: OwinStartup(typeof(GlobalAzureBootcampReport.Startup))]

namespace GlobalAzureBootcampReport
{
    public partial class Startup
    {
        public void Configuration(IAppBuilder app)
        {
            ConfigureIoC(app);
            ConfigureAuth(app);
            app.MapSignalR();
        }
    }
}
