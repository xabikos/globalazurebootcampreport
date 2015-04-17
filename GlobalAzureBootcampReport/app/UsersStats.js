var updateUsersStatsCallback;

var UsersStats = {
    addChangeListener: function (callback) {
        updateUsersStatsCallback = callback;
    },
    
    UpdateUserStats: function (newStats) {
        updateUsersStatsCallback(newStats);
    }
};

module.exports = UsersStats;