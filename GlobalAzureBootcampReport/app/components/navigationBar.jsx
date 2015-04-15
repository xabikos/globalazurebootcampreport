var React = require('react');
var ReactBootstrap = require('reactBootstrap');

class NavigationBar extends React.Component {
	render() {
		var navBarHeader = (
			<a href="/">
				<img src="/Content/images/2015-logo-inverted-small.png" alt="Global Azure Bootcamp 2015"/>
			</a>	
		);
		return ( 
			<ReactBootstrap.Navbar fixedTop={true} brand={navBarHeader}>
				<ReactBootstrap.Nav navbar right>
					<ReactBootstrap.NavItem href='https://github.com/xabikos/globalazurebootcampreport' target='_blank'>Created by xabikos</ReactBootstrap.NavItem>
					<ReactBootstrap.NavItem href='http://azure.microsoft.com/en-us/' target='_blank'>Hosted by Microsoft Azure</ReactBootstrap.NavItem>
					<ReactBootstrap.NavItem href='https://facebook.github.io/react/' target='_blank'>Powered by Reactjs</ReactBootstrap.NavItem>
				</ReactBootstrap.Nav>
			</ReactBootstrap.Navbar>
		);
  }
}

module.exports = NavigationBar;