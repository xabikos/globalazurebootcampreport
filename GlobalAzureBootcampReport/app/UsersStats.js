var updateUsersStatsCallback;

var UsersStats = {
    addChangeListener: function (callback) {
        updateUsersStatsCallback = callback;
    },
    
    updateUserStats: function (newStats) {
        updateUsersStatsCallback(newStats);
    }
};

module.exports = UsersStats;