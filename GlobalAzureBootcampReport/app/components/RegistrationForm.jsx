var React = require('react');
var ReactBootstrap = require('reactBootstrap');

var RegistrationForm = React.createClass({
	
	getInitialState(){
		return {
			firstName: '',
			lastName: '',
			email: '',
			password: ''
		};
	},

	handleChange(e){
		switch (e.target.id) {
			case 'registrationFirstName':
				this.setState({firstName: e.target.value});
                break;
			case 'registrationLastName':
				this.setState({lastName: e.target.value});
                break;
			case 'registrationEmail':
				this.setState({email: e.target.value});
                break;
			case 'registrationPassword':
				this.setState({password: e.target.value});
                break;
		}
	},

	submit(){
		console.log('Registration form submit');
	},

	render() {
		return(
			<ReactBootstrap.Panel header='Registration' bsStyle='primary'>
				<form className='form-horizontal'>
					<ReactBootstrap.Input type='text' id='registrationFirstName' value={this.state.firstName} onChange={this.handleChange} label='First Name' labelClassName='col-xs-2' wrapperClassName='col-xs-10' />
					<ReactBootstrap.Input type='text' id='registrationLastName' value={this.state.lastName} onChange={this.handleChange} label='Last Name' labelClassName='col-xs-2' wrapperClassName='col-xs-10' />
					<ReactBootstrap.Input type='email' id='registrationEmail' value={this.state.email} onChange={this.handleChange} label='Email' labelClassName='col-xs-2' wrapperClassName='col-xs-10' />
					<ReactBootstrap.Input type='password' id='registrationPassword' value={this.state.password} onChange={this.handleChange} label='Password' labelClassName='col-xs-2' wrapperClassName='col-xs-10' />
					<ReactBootstrap.Button onClick={this.submit} bsStyle='primary'>Submit</ReactBootstrap.Button>
				</form>
			</ReactBootstrap.Panel>
		);
	}
});

module.exports = RegistrationForm;