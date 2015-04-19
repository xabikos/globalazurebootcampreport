var React = require('react');
var ReactBootstrap = require('reactBootstrap');

var NavigationBar = require('./NavigationBar');
var UsersStats = require('./UsersStats');
var SecurityController = require('./SecurityController');

class App extends React.Component {
  render() {
	return (
		<div>
			<NavigationBar />
			<ReactBootstrap.Grid fluid={false} >
				<ReactBootstrap.Row>
					<ReactBootstrap.Col xs={12} md={3}>
						<UsersStats usersStats={this.props.initialStats} />
					</ReactBootstrap.Col>
					<ReactBootstrap.Col xs={12} md={6}>
					</ReactBootstrap.Col>
					<ReactBootstrap.Col xs={12} md={3}>
						<SecurityController isAuthenticated={this.props.isAuthenticated}/>
					</ReactBootstrap.Col>
				</ReactBootstrap.Row>
			</ReactBootstrap.Grid>
		</div>
	);
  }
}

module.exports = App;