var React = require('react');
var ReactBootstrap = require('reactBootstrap');

var RegistrationForm = React.createClass({
	
	render() {
		return(
			<ReactBootstrap.Panel header='Registration' bsStyle='primary'>
				Panel content
			</ReactBootstrap.Panel>
		);
	}
});

module.exports = RegistrationForm;