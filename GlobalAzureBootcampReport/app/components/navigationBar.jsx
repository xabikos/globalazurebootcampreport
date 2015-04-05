var React = require('react');

var NavigationBar = React.createClass({
  render() {
	return ( 
		<nav className="navbar navbar-fixed-top">
			 <div class="navbar-header">
				<a href="/" className="navbar-brand">
					<img src="/Content/images/2015-logo-inverted-small.png" alt="Global Azure Bootcamp 2015"/>					
				</a>				
			</div>
			<div className="navbar-collapse collapse">
				<div className="pull-right navbar-logo">
					<ul className="nav navbar-nav pull-right">
						<li>
							<a href="https://github.com/xabikos/globalazurebootcampreport" target="_blank">
								Created by xabikos
							</a>
						</li>
						<li>
							<a href="http://azure.microsoft.com/en-us/" target="_blank">
								 Hosted by Microsoft Azure
							</a>
						</li>
						<li class="dropdown dropdown-big">
							<a href="https://facebook.github.io/react/" target="_blank">
								Powered by Reactjs
							</a>
						</li>
					</ul>
				</div>
			</div>
		</nav>
	);
  }
});

module.exports = NavigationBar;