/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/*!*******************!*\
  !*** ./server.js ***!
  \*******************/
/***/ function(module, exports, __webpack_require__) {

	// Expose components globally so ReactJS.NET can use them
	var Components = __webpack_require__(/*! expose?Components!./components */ 1);

/***/ },
/* 1 */
/*!***********************************************************!*\
  !*** ../~/expose-loader?Components!./components/index.js ***!
  \***********************************************************/
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(global) {module.exports = global["Components"] = __webpack_require__(/*! -!./components/index.js */ 2);
	/* WEBPACK VAR INJECTION */}.call(exports, (function() { return this; }())))

/***/ },
/* 2 */
/*!*****************************!*\
  !*** ./components/index.js ***!
  \*****************************/
/***/ function(module, exports, __webpack_require__) {

	module.exports = {
	    NavigationBar: __webpack_require__(/*! ./NavigationBar */ 3),
	    App: __webpack_require__(/*! ./App */ 4)
	};

/***/ },
/* 3 */
/*!**************************************!*\
  !*** ./components/NavigationBar.jsx ***!
  \**************************************/
/***/ function(module, exports, __webpack_require__) {

	var React = __webpack_require__(/*! react */ 5);
	var ReactBootstrap = __webpack_require__(/*! reactBootstrap */ 6);
	
	var ____Class0=React.Component;for(var ____Class0____Key in ____Class0){if(____Class0.hasOwnProperty(____Class0____Key)){NavigationBar[____Class0____Key]=____Class0[____Class0____Key];}}var ____SuperProtoOf____Class0=____Class0===null?null:____Class0.prototype;NavigationBar.prototype=Object.create(____SuperProtoOf____Class0);NavigationBar.prototype.constructor=NavigationBar;NavigationBar.__superConstructor__=____Class0;function NavigationBar(){"use strict";if(____Class0!==null){____Class0.apply(this,arguments);}}
		Object.defineProperty(NavigationBar.prototype,"render",{writable:true,configurable:true,value:function() {"use strict";
			var navBarHeader = (
				React.createElement("a", {href: "/"}, 
					React.createElement("img", {src: "/Content/images/2015-logo-inverted-small.png", alt: "Global Azure Bootcamp 2015"})
				)	
			);
			return ( 
				React.createElement(ReactBootstrap.Navbar, {fixedTop: true, brand: navBarHeader}, 
					React.createElement(ReactBootstrap.Nav, {navbar: true, right: true}, 
						React.createElement(ReactBootstrap.NavItem, {href: "https://github.com/xabikos/globalazurebootcampreport", target: "_blank"}, "Created by xabikos"), 
						React.createElement(ReactBootstrap.NavItem, {href: "http://azure.microsoft.com/en-us/", target: "_blank"}, "Hosted by Microsoft Azure"), 
						React.createElement(ReactBootstrap.NavItem, {href: "https://facebook.github.io/react/", target: "_blank"}, "Powered by Reactjs")
					)
				)
			);
	  }});
	
	
	module.exports = NavigationBar;

/***/ },
/* 4 */
/*!****************************!*\
  !*** ./components/App.jsx ***!
  \****************************/
/***/ function(module, exports, __webpack_require__) {

	var React = __webpack_require__(/*! react */ 5);
	
	var NavigationBar = __webpack_require__(/*! ./NavigationBar */ 3);
	var UsersStats = __webpack_require__(/*! ./UsersStats */ 7);
	
	var ____Class1=React.Component;for(var ____Class1____Key in ____Class1){if(____Class1.hasOwnProperty(____Class1____Key)){App[____Class1____Key]=____Class1[____Class1____Key];}}var ____SuperProtoOf____Class1=____Class1===null?null:____Class1.prototype;App.prototype=Object.create(____SuperProtoOf____Class1);App.prototype.constructor=App;App.__superConstructor__=____Class1;function App(){"use strict";if(____Class1!==null){____Class1.apply(this,arguments);}}
	  Object.defineProperty(App.prototype,"render",{writable:true,configurable:true,value:function() {"use strict";
		return (
			React.createElement("div", null, 
				React.createElement(NavigationBar, null), 
				React.createElement(UsersStats, {usersStats: this.props.initialStats})
				
			)
		);
	  }});
	
	
	module.exports = App;

/***/ },
/* 5 */
/*!************************!*\
  !*** external "React" ***!
  \************************/
/***/ function(module, exports, __webpack_require__) {

	module.exports = React;

/***/ },
/* 6 */
/*!*********************************!*\
  !*** external "ReactBootstrap" ***!
  \*********************************/
/***/ function(module, exports, __webpack_require__) {

	module.exports = ReactBootstrap;

/***/ },
/* 7 */
/*!***********************************!*\
  !*** ./components/UsersStats.jsx ***!
  \***********************************/
/***/ function(module, exports, __webpack_require__) {

	var React = __webpack_require__(/*! react */ 5);
	
	var ____Class2=React.Component;for(var ____Class2____Key in ____Class2){if(____Class2.hasOwnProperty(____Class2____Key)){UsersStats[____Class2____Key]=____Class2[____Class2____Key];}}var ____SuperProtoOf____Class2=____Class2===null?null:____Class2.prototype;UsersStats.prototype=Object.create(____SuperProtoOf____Class2);UsersStats.prototype.constructor=UsersStats;UsersStats.__superConstructor__=____Class2;function UsersStats(){"use strict";if(____Class2!==null){____Class2.apply(this,arguments);}}
	  Object.defineProperty(UsersStats.prototype,"render",{writable:true,configurable:true,value:function() {"use strict";
		var usersStats = this.props.usersStats.map(function(userStat) 
			{return React.createElement("li", null, 
				"Name: ", userStat.Name, 
				"Count: ", userStat.TweetsNumber
			);}
		);
		return (		
			React.createElement("div", {id: "usersStats"}, 
				React.createElement("h1", null, "Users Stats"), 
				React.createElement("ol", null, 
					usersStats
				)
			)
		);
	  }});
	
	
	module.exports = UsersStats;

/***/ }
/******/ ]);
//# sourceMappingURL=server.bundle.js.map