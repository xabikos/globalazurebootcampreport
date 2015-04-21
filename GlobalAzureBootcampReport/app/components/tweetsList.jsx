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
		var tweets = this.state.tweets;
		newTweets.map(tweet=>
			tweets.unshift(tweet)
		);
		this.setState({tweets: tweets});
	}
});

module.exports = TweetsList;