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
		var tweets = this.state.tweets.map(tweet =>
			<li>
				Text: {tweet.Text}
			</li>
		);
		return (		
			<div>
				<ul>
					{tweets}
				</ul>
			</div>
		);
	},

	onChange(newTweets){
		var existingTweets = this.state.tweets;
		var newTweets = existingTweets.unshift(newTweets);
		this.setState({tweets: newTweets});
	}
});

module.exports = TweetsList;