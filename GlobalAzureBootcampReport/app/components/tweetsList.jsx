var React = require('react');
var ReactBootstrap = require('reactBootstrap');

var tweets = require('../tweets');

var TweetsList = React.createClass({
	
	getInitialState(){
		return {tweets: this.props.tweets};
	},

	componentDidMount(){
		tweets.addChangeListener(this.onChange);
	},

	render() {
		var tweets = this.state.tweets.map(tweet => {
			var tweetUrl = "http://twitter.com/" + tweet.ScreenName +"/status/" + tweet.TweetId;
			return(
				<div className="tweetContainer">
					<div className="tweetBody">
						Text: {tweet.Text}
					</div>
					<div className="tweetFooter">
						<a href={tweetUrl} target="_blank">
							View original 
						</a>
						<span>
							Created at: {tweet.CreatedAt}
						</span>
					</div>
				</div>				
			)
		});
		return (		
			<ReactBootstrap.Panel header='GlobalAzure timeline' bsStyle='success'>
				{tweets}				
			</ReactBootstrap.Panel>
		);
	},

	onChange(newTweets){
		var tweets = this.state.tweets;
		newTweets.map(tweet=>
			tweets.unshift(tweet)
		);
		this.setState({tweets: tweets});
	}
});

module.exports = TweetsList;