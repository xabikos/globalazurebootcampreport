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
/***/ function(module, exports, __webpack_require__) {

	// All JavaScript in here will be loaded client-side
	var Components = __webpack_require__(1);
	var UsersStats = __webpack_require__(3)

/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(global) {module.exports = global["Components"] = __webpack_require__(2);
	/* WEBPACK VAR INJECTION */}.call(exports, (function() { return this; }())))

/***/ },
/* 2 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = {
	    App: __webpack_require__(5)
	};

/***/ },
/* 3 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(global) {module.exports = global["UsersStats"] = __webpack_require__(4);
	/* WEBPACK VAR INJECTION */}.call(exports, (function() { return this; }())))

/***/ },
/* 4 */
/***/ function(module, exports, __webpack_require__) {

	var updateUsersStatsCallback;
	
	var usersStats = {
	    addChangeListener: function (callback) {
	        updateUsersStatsCallback = callback;
	    },
	
	    updateUserStats: function (newStats) {
	        updateUsersStatsCallback(newStats);
	    }
	};
	
	module.exports = usersStats;

/***/ },
/* 5 */
/***/ function(module, exports, __webpack_require__) {

	var React = __webpack_require__(6);
	var ReactBootstrap = __webpack_require__(7);
	
	var NavigationBar = __webpack_require__(8);
	var UsersStatsList = __webpack_require__(9);
	var TweetsList = __webpack_require__(10);
	var SecurityController = __webpack_require__(11);
	
	var ____Class0=React.Component;for(var ____Class0____Key in ____Class0){if(____Class0.hasOwnProperty(____Class0____Key)){App[____Class0____Key]=____Class0[____Class0____Key];}}var ____SuperProtoOf____Class0=____Class0===null?null:____Class0.prototype;App.prototype=Object.create(____SuperProtoOf____Class0);App.prototype.constructor=App;App.__superConstructor__=____Class0;function App(){"use strict";if(____Class0!==null){____Class0.apply(this,arguments);}}
	  Object.defineProperty(App.prototype,"render",{writable:true,configurable:true,value:function() {"use strict";
		var Grid = ReactBootstrap.Grid;
		var Row = ReactBootstrap.Row;
		var Col = ReactBootstrap.Col;
		
		return (
			React.createElement("div", null, 
				React.createElement(NavigationBar, null), 
				React.createElement(Grid, {fluid: false}, 
					React.createElement(Row, null, 
						React.createElement(Col, {xs: 12, md: 3}, 
							React.createElement(UsersStatsList, {usersStats: this.props.initialStats})
						), 
						React.createElement(Col, {xs: 12, md: 6}, 
							React.createElement(TweetsList, {tweets: this.props.initialTweets})
						), 
						React.createElement(Col, {xs: 12, md: 3}, 
							React.createElement(SecurityController, {isAuthenticated: this.props.isAuthenticated, user: this.props.user})
						)
					)
				)
			)
		);
	  }});
	
	
	module.exports = App;

/***/ },
/* 6 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = React;

/***/ },
/* 7 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = ReactBootstrap;

/***/ },
/* 8 */
/***/ function(module, exports, __webpack_require__) {

	var React = __webpack_require__(6);
	var ReactBootstrap = __webpack_require__(7);
	
	var ____Class1=React.Component;for(var ____Class1____Key in ____Class1){if(____Class1.hasOwnProperty(____Class1____Key)){NavigationBar[____Class1____Key]=____Class1[____Class1____Key];}}var ____SuperProtoOf____Class1=____Class1===null?null:____Class1.prototype;NavigationBar.prototype=Object.create(____SuperProtoOf____Class1);NavigationBar.prototype.constructor=NavigationBar;NavigationBar.__superConstructor__=____Class1;function NavigationBar(){"use strict";if(____Class1!==null){____Class1.apply(this,arguments);}}
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
/***/ function(module, exports, __webpack_require__) {

	var React = __webpack_require__(6);
	var ReactBootstrap = __webpack_require__(7);
	
	var usersStats = __webpack_require__(4);
	
	var UsersStatsList = React.createClass({displayName: "UsersStatsList",
		
		getInitialState:function(){
			return {stats: this.props.usersStats};
		},
	
		componentDidMount:function(){
			usersStats.addChangeListener(this.onChange);
		},
	
		render:function() {
			var stats = this.state.stats.map(function(userStat) 
				{return React.createElement("li", null, 
					"Name: ", userStat.Name, 
					"Count: ", userStat.TweetsNumber
				);}
			);
			return (		
				React.createElement(ReactBootstrap.Panel, {header: "Users Statistcis", bsStyle: "info"}, 
					React.createElement("h1", null, "Users Stats"), 
					React.createElement("ol", null, 
						stats
					)
				)
			);
		},
	
		onChange:function(newStats){
			this.setState({stats: newStats});
		}
	
	});
	
	module.exports = UsersStatsList;

/***/ },
/* 10 */
/***/ function(module, exports, __webpack_require__) {

	var React = __webpack_require__(6);
	var ReactBootstrap = __webpack_require__(7);
	
	var tweets = __webpack_require__(16);
	
	var TweetsList = React.createClass({displayName: "TweetsList",
		
		getInitialState:function(){
			return {tweets: this.props.tweets};
		},
	
		componentDidMount:function(){
			tweets.addChangeListener(this.onChange);
		},
	
		render:function() {
			var tweets = this.state.tweets.map(function(tweet) 
				{return React.createElement("li", null, 
					"Text: ", tweet.Text
				);}
			);
			return (		
				React.createElement("div", null, 
					React.createElement("ul", null, 
						tweets
					)
				)
			);
		},
	
		onChange:function(newTweets){
			var existingTweets = this.state.tweets;
			var newTweets = existingTweets.unshift(newTweets);
			this.setState({tweets: newTweets});
		}
	});
	
	module.exports = TweetsList;

/***/ },
/* 11 */
/***/ function(module, exports, __webpack_require__) {

	var React = __webpack_require__(6);
	
	var LoginForm = __webpack_require__(12);
	var RegistrationForm = __webpack_require__(13);
	var UserInfo = __webpack_require__(14);
	
	var security = __webpack_require__(15);
	
	var SecurityController = React.createClass({displayName: "SecurityController",
		
		getInitialState:function(){
			return {
				isAuthenticated : this.props.isAuthenticated,
				user: this.props.user
			};
		},
	
		componentDidMount:function(){
			security.addChangeListener(this.onChange);
		},
	
		render:function() {
			return (
				this.state.isAuthenticated ? 
					React.createElement(UserInfo, {user: this.state.user}) :
					(React.createElement("div", null, 
						React.createElement(LoginForm, null), 
						React.createElement(RegistrationForm, null)
					))
			);
		},
	
		onChange:function(status){
			this.setState({isAuthenticated: status.isAuthenticated});
		}
	});
	
	module.exports = SecurityController;

/***/ },
/* 12 */
/***/ function(module, exports, __webpack_require__) {

	var React = __webpack_require__(6);
	var ReactBootstrap = __webpack_require__(7);
	
	var security = __webpack_require__(15);
	
	var LogIn = React.createClass({displayName: "LogIn",
		
		getInitialState:function(){
			return {
				userName: '',			
				password: ''
			};
		},
	
		handleChange:function(e){
			switch (e.target.id) {
				case 'loginUserName':
					this.setState({userName: e.target.value});
					break;
				case 'loginPassword':
					this.setState({
						password: e.target.value
					});
				break;
			}
		},
	
		login:function() {
			security.login(this.state);
		},
	
		render:function() {
			var Panel = ReactBootstrap.Panel;
			var Input = ReactBootstrap.Input;
			var Button = ReactBootstrap.Button;
	
			return(
				React.createElement(Panel, {header: "Login", bsStyle: "primary"}, 
					React.createElement("form", {className: "form-horizontal"}, 
						React.createElement(Input, {type: "text", id: "loginUserName", value: this.state.userName, onChange: this.handleChange, label: "Username", labelClassName: "col-xs-2", wrapperClassName: "col-xs-12"}), 
						React.createElement(Input, {type: "password", id: "loginPassword", value: this.state.password, onChange: this.handleChange, label: "Password", labelClassName: "col-xs-2", wrapperClassName: "col-xs-12"}), 
						React.createElement(Button, {onClick: this.login, bsStyle: "primary"}, "Login")
					)
				)
			);
		}
	});
	
	module.exports = LogIn;

/***/ },
/* 13 */
/***/ function(module, exports, __webpack_require__) {

	var React = __webpack_require__(6);
	var ReactBootstrap = __webpack_require__(7);
	
	var security = __webpack_require__(15);
	
	var RegistrationForm = React.createClass({displayName: "RegistrationForm",
		
		getInitialState:function(){
			return {
				userName: '',			
				email: '',
				password: '',
				confirmPassword: ''
			};
		},
	
		handleChange:function(e){
			switch (e.target.id) {
				case 'registrationUserName':
					this.setState({userName: e.target.value});
					break;
				case 'registrationEmail':
					this.setState({email: e.target.value});
					break;
				case 'registrationPassword':
					this.setState({
						password: e.target.value,
						confirmPassword: e.target.value
					});
					break;
			}
		},
	
		register:function(){
			security.register(this.state);
		},
	
		render:function() {
			return(
				React.createElement(ReactBootstrap.Panel, {header: "Registration", bsStyle: "primary"}, 
					React.createElement("form", {className: "form-horizontal"}, 
						React.createElement(ReactBootstrap.Input, {type: "text", id: "registrationUserName", value: this.state.userName, onChange: this.handleChange, label: "Username", labelClassName: "col-xs-2", wrapperClassName: "col-xs-12"}), 
						React.createElement(ReactBootstrap.Input, {type: "email", id: "registrationEmail", value: this.state.email, onChange: this.handleChange, label: "Email", labelClassName: "col-xs-2", wrapperClassName: "col-xs-12"}), 
						React.createElement(ReactBootstrap.Input, {type: "password", id: "registrationPassword", value: this.state.password, onChange: this.handleChange, label: "Password", labelClassName: "col-xs-2", wrapperClassName: "col-xs-12"}), 
						React.createElement(ReactBootstrap.Button, {onClick: this.register, bsStyle: "primary"}, "Register")
					)
				)
			);
		}
	});
	
	module.exports = RegistrationForm;

/***/ },
/* 14 */
/***/ function(module, exports, __webpack_require__) {

	var React = __webpack_require__(6);
	var ReactBootstrap = __webpack_require__(7);
	
	var security = __webpack_require__(15);
	
	var UserInfo = React.createClass({displayName: "UserInfo",
		
		logout:function(){
			security.logout();
		},
	
		render:function() {
			var Panel = ReactBootstrap.Panel;
			var Button = ReactBootstrap.Button;
			var user = this.props.user;
			return(
				React.createElement(Panel, {header: "User Info", bsStyle: "primary"}, 
					React.createElement("div", null, 
						"UserName: ", user.UserName
					), 
					React.createElement("div", null, 
						"Email: ", user.Email
					), 
					React.createElement(Button, {onClick: this.logout, bsStyle: "primary"}, "Log out")
				)
			);
		}
	});
	
	module.exports = UserInfo;

/***/ },
/* 15 */
/***/ function(module, exports, __webpack_require__) {

	var userAuthenticationCallback;
	
	var security = {
	    addChangeListener: function (callback) {
	        userAuthenticationCallback = callback;
	    },
	    
	    updateUserSecurity: function (status) {
	        updateUsersStatsCallback(status);
	    },
	
	    register: function (registrationData) {
	        $.post("api/Account/Register", registrationData, function (result) {
	            if (result.isAuthenticated) {
	                userAuthenticationCallback(result);
	            }
	        });
	    },
	
	    login:function(loginData) {
	        $.post("api/Account/Login", loginData, function (result) {
	            if (result.isAuthenticated) {
	                userAuthenticationCallback(result);
	            }
	        });
	    },
	
	    logout: function() {
	        $.post("api/Account/Logout", function (result) {
	            if (result.isLoggedOut) {
	                userAuthenticationCallback({ isAuthenticated: false });
	            }
	        });
	    }
	};
	
	module.exports = security;

/***/ },
/* 16 */
/***/ function(module, exports, __webpack_require__) {

	var newTweetsCallback;
	
	var tweets = {
	    addChangeListener: function (callback) {
	        newTweetsCallback = callback;
	    },
	
	    updateUserStats: function (newTweets) {
	        newTweetsCallback(newTweets);
	    }
	};
	
	module.exports = tweets;

/***/ }
/******/ ]);
//# sourceMappingURL=client.bundle.js.map