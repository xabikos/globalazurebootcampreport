var NavigationBar = require('./NavigationBar');
var React = require('react');

class App extends React.Component {
  render() {
	return (
		<div>
			<NavigationBar />
		</div>
	);
  }
}

module.exports = App;