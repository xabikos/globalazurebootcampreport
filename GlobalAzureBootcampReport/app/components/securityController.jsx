var React = require('react');

var RegistrationForm = require('./RegistrationForm');
var UserInfo = require('./UserInfo');

var security = require('../security');

var SecurityController = React.createClass({
	
	getInitialState(){
		return {
			isAuthenticated : this.props.isAuthenticated
		};
	},

	componentDidMount(){
		security.addChangeListener(this.onChange);
	},

	render() {
		return (
			this.state.isAuthenticated ? <UserInfo /> : <RegistrationForm />
		);
	},

	onChange(status){
		this.setState({isAuthenticated: status.isAuthenticated});
	}
});

module.exports = SecurityController;