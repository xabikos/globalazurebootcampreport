var newTweetsCallback;

var tweets = {
    addChangeListener: function (callback) {
        newTweetsCallback = callback;
    },

    updateUserStats: function (newTweets) {
        newTweetsCallback(newTweets);
    }
};

module.exports = tweets;