/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	// Expose components globally so ReactJS.NET can use them
	var Components = __webpack_require__(1);

/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(global) {module.exports = global["Components"] = __webpack_require__(2);
	/* WEBPACK VAR INJECTION */}.call(exports, (function() { return this; }())))

/***/ },
/* 2 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = {
	    NavigationBar: __webpack_require__(3),
	    App: __webpack_require__(4)
	};

/***/ },
/* 3 */
/***/ function(module, exports, __webpack_require__) {

	var React = __webpack_require__(5);

	var NavigationBar = React.createClass({displayName: "NavigationBar",
	  render:function() {
		return ( 
			React.createElement("nav", {className: "navbar navbar-fixed-top"}, 
				 React.createElement("div", {class: "navbar-header"}, 
					React.createElement("a", {href: "/", className: "navbar-brand"}, 
						React.createElement("img", {src: "/Content/images/2015-logo-inverted-small.png", alt: "Global Azure Bootcamp 2015"})					
					)				
				), 
				React.createElement("div", {className: "navbar-collapse collapse"}, 
					React.createElement("div", {className: "pull-right navbar-logo"}, 
						React.createElement("ul", {className: "nav navbar-nav pull-right"}, 
							React.createElement("li", null, 
								React.createElement("a", {href: "https://github.com/xabikos/globalazurebootcampreport", target: "_blank"}, 
									"Created by xabikos"
								)
							), 
							React.createElement("li", null, 
								React.createElement("a", {href: "http://azure.microsoft.com/en-us/", target: "_blank"}, 
									 "Hosted by Microsoft Azure"
								)
							), 
							React.createElement("li", {class: "dropdown dropdown-big"}, 
								React.createElement("a", {href: "https://facebook.github.io/react/", target: "_blank"}, 
									"Powered by Reactjs"
								)
							)
						)
					)
				)
			)
		);
	  }
	});

	module.exports = NavigationBar;

/***/ },
/* 4 */
/***/ function(module, exports, __webpack_require__) {

	var NavigationBar = __webpack_require__(3);
	var React = __webpack_require__(5);

	var App = React.createClass({displayName: "App",
	  render:function() {
		return (
			React.createElement("div", null, 
				React.createElement(NavigationBar, null)
			)
		);
	  }
	});

	module.exports = App;

/***/ },
/* 5 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = React;

/***/ }
/******/ ]);