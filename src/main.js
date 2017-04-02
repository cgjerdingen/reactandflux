$ = jQuery = require('jquery');
var React = require('react');
var ReactDOM = require('react-dom');
//var test = 'testing';
var Home = require('./components/homePage');


//var Home = React.createClass({
//	render: function() {
//		return (
//			<div>Administration</div>
//		);
//	}
//});


ReactDOM.render(<Home />, document.getElementById('app'));



//var App = console.log('Hello world from Browserify');

//module.exports = App;




