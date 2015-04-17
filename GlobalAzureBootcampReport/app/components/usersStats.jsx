var React = require('react');

var usersStatsStore = require('../UsersStats');

var UsersStats = React.createClass({
	
	getInitialState(){
		return {stats: this.props.usersStats};
	},

	componentDidMount(){
		usersStatsStore.addChangeListener(this.onChange);
	},

	render() {
		var usersStats = this.state.stats.map(userStat =>
			<li>
				Name: {userStat.Name}
				Count: {userStat.TweetsNumber}
			</li>
		);
		return (		
			<div id="usersStats">
				<h1>Users Stats</h1>
				<ol>
					{usersStats}
				</ol>
			</div>
		);
	},

	onChange(newStats){
		this.setState({stats: newStats});
	}

});

module.exports = UsersStats;