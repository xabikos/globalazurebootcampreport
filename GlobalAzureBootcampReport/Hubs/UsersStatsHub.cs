using System;
using System.Collections.Generic;
using GlobalAzureBootcampReport.Models;
using Microsoft.AspNet.SignalR;

namespace GlobalAzureBootcampReport.Hubs
{
    public class UsersStatsHub : Hub
    {
        public void UpdateUsersStats(IEnumerable<UserStat> usersStats)
        {
            Clients.All.updateUsersStats(usersStats);
        }
    }
}