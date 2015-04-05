var NavigationBar = require('./NavigationBar');
var React = require('react');

var App = React.createClass({
  render() {
	return (
		<div>
			<NavigationBar />
		</div>
	);
  }
});

module.exports = App;