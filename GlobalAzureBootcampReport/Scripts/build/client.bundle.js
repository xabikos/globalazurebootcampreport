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
  !*** ./client.js ***!
  \*******************/
/***/ function(module, exports, __webpack_require__) {

	// All JavaScript in here will be loaded client-side
	var Components = __webpack_require__(/*! expose?Components!./index */ 1);
	var UsersStats = __webpack_require__(/*! expose?UsersStats!../../app/UsersStats */ 3)

/***/ },
/* 1 */
/*!****************************************************************************************************************!*\
  !*** C:/Development/globalazurebootcampreport/GlobalAzureBootcampReport/~/expose-loader?Components!./index.js ***!
  \****************************************************************************************************************/
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(global) {module.exports = global["Components"] = __webpack_require__(/*! -!./index.js */ 2);
	/* WEBPACK VAR INJECTION */}.call(exports, (function() { return this; }())))

/***/ },
/* 2 */
/*!******************!*\
  !*** ./index.js ***!
  \******************/
/***/ function(module, exports, __webpack_require__) {

	module.exports = {
	    App: __webpack_require__(/*! ../../app/components/app */ 5)
	};

/***/ },
/* 3 */
/*!******************************************************************************************************************************************************************************************!*\
  !*** C:/Development/globalazurebootcampreport/GlobalAzureBootcampReport/~/expose-loader?UsersStats!C:/Development/globalazurebootcampreport/GlobalAzureBootcampReport/app/UsersStats.js ***!
  \******************************************************************************************************************************************************************************************/
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(global) {module.exports = global["UsersStats"] = __webpack_require__(/*! -!C:/Development/globalazurebootcampreport/GlobalAzureBootcampReport/app/UsersStats.js */ 4);
	/* WEBPACK VAR INJECTION */}.call(exports, (function() { return this; }())))

/***/ },
/* 4 */
/*!********************************************************************************************!*\
  !*** C:/Development/globalazurebootcampreport/GlobalAzureBootcampReport/app/UsersStats.js ***!
  \********************************************************************************************/
/***/ function(module, exports, __webpack_require__) {

	var updateUsersStatsCallback;
	
	var UsersStats = {
	    addChangeListener: function (callback) {
	        updateUsersStatsCallback = callback;
	    },
	    
	    updateUserStats: function (newStats) {
	        updateUsersStatsCallback(newStats);
	    }
	};
	
	module.exports = UsersStats;

/***/ },
/* 5 */
/*!*************************************************************************************************!*\
  !*** C:/Development/globalazurebootcampreport/GlobalAzureBootcampReport/app/components/app.jsx ***!
  \*************************************************************************************************/
/***/ function(module, exports, __webpack_require__) {

	var React = __webpack_require__(/*! react */ 6);
	var ReactBootstrap = __webpack_require__(/*! reactBootstrap */ 7);
	
	var NavigationBar = __webpack_require__(/*! ./NavigationBar */ 8);
	var UsersStats = __webpack_require__(/*! ./UsersStats */ 9);
	
	var ____Class8=React.Component;for(var ____Class8____Key in ____Class8){if(____Class8.hasOwnProperty(____Class8____Key)){App[____Class8____Key]=____Class8[____Class8____Key];}}var ____SuperProtoOf____Class8=____Class8===null?null:____Class8.prototype;App.prototype=Object.create(____SuperProtoOf____Class8);App.prototype.constructor=App;App.__superConstructor__=____Class8;function App(){"use strict";if(____Class8!==null){____Class8.apply(this,arguments);}}
	  Object.defineProperty(App.prototype,"render",{writable:true,configurable:true,value:function() {"use strict";
		return (
			React.createElement("div", null, 
				React.createElement(NavigationBar, null), 
				React.createElement(ReactBootstrap.Grid, {fluid: false}, 
					React.createElement(ReactBootstrap.Row, null, 
						React.createElement(ReactBootstrap.Col, {xs: 6, md: 4}, 
							React.createElement(UsersStats, {usersStats: this.props.initialStats})
						)
					)
				)
			)
		);
	  }});
	
	
	module.exports = App;

/***/ },
/* 6 */
/*!************************!*\
  !*** external "React" ***!
  \************************/
/***/ function(module, exports, __webpack_require__) {

	module.exports = React;

/***/ },
/* 7 */
/*!*********************************!*\
  !*** external "ReactBootstrap" ***!
  \*********************************/
/***/ function(module, exports, __webpack_require__) {

	module.exports = ReactBootstrap;

/***/ },
/* 8 */
/*!***********************************************************************************************************!*\
  !*** C:/Development/globalazurebootcampreport/GlobalAzureBootcampReport/app/components/NavigationBar.jsx ***!
  \***********************************************************************************************************/
/***/ function(module, exports, __webpack_require__) {

	var React = __webpack_require__(/*! react */ 6);
	var ReactBootstrap = __webpack_require__(/*! reactBootstrap */ 7);
	
	var ____Class9=React.Component;for(var ____Class9____Key in ____Class9){if(____Class9.hasOwnProperty(____Class9____Key)){NavigationBar[____Class9____Key]=____Class9[____Class9____Key];}}var ____SuperProtoOf____Class9=____Class9===null?null:____Class9.prototype;NavigationBar.prototype=Object.create(____SuperProtoOf____Class9);NavigationBar.prototype.constructor=NavigationBar;NavigationBar.__superConstructor__=____Class9;function NavigationBar(){"use strict";if(____Class9!==null){____Class9.apply(this,arguments);}}
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
/* 9 */
/*!********************************************************************************************************!*\
  !*** C:/Development/globalazurebootcampreport/GlobalAzureBootcampReport/app/components/UsersStats.jsx ***!
  \********************************************************************************************************/
/***/ function(module, exports, __webpack_require__) {

	var React = __webpack_require__(/*! react */ 6);
	
	var usersStatsStore = __webpack_require__(/*! ../UsersStats */ 4);
	
	var UsersStats = React.createClass({displayName: "UsersStats",
		
		getInitialState:function(){
			return {stats: this.props.usersStats};
		},
	
		componentDidMount:function(){
			usersStatsStore.addChangeListener(this.onChange);
		},
	
		render:function() {
			var usersStats = this.state.stats.map(function(userStat) 
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
		},
	
		onChange:function(newStats){
			this.setState({stats: newStats});
		}
	
	});
	
	module.exports = UsersStats;

/***/ }
/******/ ]);
//# sourceMappingURL=client.bundle.js.map