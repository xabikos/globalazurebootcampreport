'use strict';

class ExampleApplication extends React.Component {
    render() {
        var message = `React has been successfully running for ${this.props.elapsed} seconds.`;

        return <p>
                {message}
            </p>;
    }
}        
React.render(React.createElement(ExampleApplication, { elapsed: 100 }), document.getElementById('app'));