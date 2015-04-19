﻿var React = require('react');

var LoginForm = require('./LoginForm');
var RegistrationForm = require('./RegistrationForm');
var UserInfo = require('./UserInfo');

var security = require('../security');

var SecurityController = React.createClass({
	
	getInitialState(){
		return {
			isAuthenticated : this.props.isAuthenticated,
			user: this.props.user
		};
	},

	componentDidMount(){
		security.addChangeListener(this.onChange);
	},

	render() {
		return (
			this.state.isAuthenticated ? 
				<UserInfo user={this.state.user} /> :
				(<div>
					<LoginForm />
					<RegistrationForm />
				</div>)
		);
	},

	onChange(status){
		this.setState({isAuthenticated: status.isAuthenticated});
	}
});

module.exports = SecurityController;