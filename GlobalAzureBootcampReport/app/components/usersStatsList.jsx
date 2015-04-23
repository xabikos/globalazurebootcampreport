var React = require('react');
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
				<div>
					Name: {userStat.Name}
				</div>
				<div>
					Count: {userStat.TweetsNumber}
				</div>
				<div>
					<a href={userStat.ProfileUrl} target="_blank">
						<img src={userStat.ImageUrl} />
					</a>
				</div>				
			</li>
		);

		return (		
			<ReactBootstrap.Panel header='Users Statistcis' bsStyle='info'>				
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