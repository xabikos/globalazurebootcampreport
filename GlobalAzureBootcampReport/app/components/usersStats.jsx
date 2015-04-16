var React = require('react');

class UsersStats extends React.Component {
  render() {
	var usersStats = this.props.usersStats.map(userStat =>
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
  }
}

module.exports = UsersStats;