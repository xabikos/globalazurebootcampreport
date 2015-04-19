var userAuthenticationCallback;

var security = {
    addChangeListener: function (callback) {
        userAuthenticationCallback = callback;
    },
    
    updateUserSecurity: function (status) {
        updateUsersStatsCallback(status);
    },

    register: function (registrationData) {
        $.post("api/Account/Register", registrationData, function (result) {
            if (result.isAuthenticated) {
                userAuthenticationCallback({ isAuthenticated: true });
            }
        });
    },

    logout: function() {
        $.post("api/Account/Logout", function (result) {
            if (result.isLoggedOut) {
                userAuthenticationCallback({ isAuthenticated: false });
            }
        });
    }
};

module.exports = security;