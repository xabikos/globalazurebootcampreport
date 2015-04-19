﻿var React = require('react');
var ReactBootstrap = require('reactBootstrap');

var usersStats = require('../usersStats');

var UsersStatsList = React.createClass({
	
	getInitialState(){
		return {stats: this.props.usersStats};
	},

	componentDidMount(){
		usersStats.addChangeListener(this.onChange);
	},

	render() {
		var stats = this.state.stats.map(userStat =>
			<li>
				Name: {userStat.Name}
				Count: {userStat.TweetsNumber}
			</li>
		);
		return (		
			<ReactBootstrap.Panel header='Users Statistcis' bsStyle='info'>
				<h1>Users Stats</h1>
				<ol>
					{stats}
				</ol>
			</ReactBootstrap.Panel>
		);
	},

	onChange(newStats){
		this.setState({stats: newStats});
	}

});

module.exports = UsersStatsList;