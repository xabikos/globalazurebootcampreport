var React = require('react');

var NavigationBar = require('./NavigationBar');
var UsersStats = require('./UsersStats');

class App extends React.Component {
  render() {
	return (
		<div>
			<NavigationBar />
			<UsersStats usersStats={this.props.initialStats} />			
		</div>
	);
  }
}

module.exports = App;