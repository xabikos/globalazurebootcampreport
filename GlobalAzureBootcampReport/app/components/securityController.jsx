var React = require('react');

var RegistrationForm = require('./RegistrationForm');

var SecurityController = React.createClass({
	
	getInitialState(){
		return {
			isAuthenticated : this.props.isAuthenticated
		};
	},

	render() {
		return (
			this.state.isAuthenticated ? <div>User is auth</div> : <RegistrationForm />
		);
	}
});

module.exports = SecurityController;