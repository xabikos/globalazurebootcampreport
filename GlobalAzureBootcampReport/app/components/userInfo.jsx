var React = require('react');
var ReactBootstrap = require('reactBootstrap');

var security = require('../security');

var UserInfo = React.createClass({
	
	logout(){
		security.logout();
	},

	render() {
		return(
			<ReactBootstrap.Panel header='User Info' bsStyle='primary'>
				<div>User is auth</div>
				<ReactBootstrap.Button onClick={this.logout} bsStyle='primary'>Log out</ReactBootstrap.Button>
			</ReactBootstrap.Panel>
		);
	}
});

module.exports = UserInfo;