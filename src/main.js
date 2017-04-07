$ = jQuery = require('jquery');
var React = require('react');
var ReactDOM = require('react-dom');
//var test = 'testing';
var Header = require('./components/common/header');
var Home = require('./components/homePage');
var About = require('./Components/about/aboutPage');
var Authors = require('./Components/authors/authorPage');

(function(win) {
	"use strict";
var App = React.createClass({
	render: function(){
		var Child;

		switch(this.props.route) {
			case 'about': Child = About; break;
			case 'authors': Child = Authors; break;
			default: Child = Home;
		}

		return (
			<div>
				<Header/>
				<Child/>
			</div>
		);
	}
});

function render() {
	var route = win.location.hash.substr(1);
	ReactDOM.render(<App route={route} />,document.getElementById('app'));
}

//javascript iife pattern/expression
win.addEventListener('hashchange', render);
render();

})(window);


//var Home = React.createClass({
//	render: function() {
//		return (
//			<div>Administration</div>
//		);
//	}
//});


//ReactDOM.render(<Home />, document.getElementById('app'));



//var App = console.log('Hello world from Browserify');

//module.exports = App;
