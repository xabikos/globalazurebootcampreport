var React = require('react');
var ReactBootstrap = require('reactBootstrap');

var NavigationBar = require('./NavigationBar');
var UsersStats = require('./UsersStats');
var RegistrationForm = require('./RegistrationForm');

class App extends React.Component {
  render() {
	return (
		<div>
			<NavigationBar />
			<ReactBootstrap.Grid fluid={false} >
				<ReactBootstrap.Row>
					<ReactBootstrap.Col xs={12} md={4}>
						<UsersStats usersStats={this.props.initialStats} />
					</ReactBootstrap.Col>
					<ReactBootstrap.Col xs={12} md={6}>
					</ReactBootstrap.Col>
					<ReactBootstrap.Col xs={12} md={2}>
						<RegistrationForm />
					</ReactBootstrap.Col>
				</ReactBootstrap.Row>
			</ReactBootstrap.Grid>
		</div>
	);
  }
}

module.exports = App;