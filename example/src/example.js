var React = require('react');
var ReactDOM = require('react-dom');
var SocialButton = require('react-social-button');

var App = React.createClass({
	render () {
		return (
			<div>
				<SocialButton
          social='twitter'/>
			</div>
		);
	}
});

ReactDOM.render(<App />, document.getElementById('app'));
