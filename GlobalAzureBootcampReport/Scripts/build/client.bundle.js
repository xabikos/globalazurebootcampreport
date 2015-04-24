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
	var UsersStats = __webpack_require__(/*! expose?UsersStats!../../app/usersStats */ 3);
	var Tweets = __webpack_require__(/*! expose?Tweets!../../app/tweets */ 5);

/***/ },
/* 1 */
/*!*************************************************************************************************************************************!*\
  !*** C:/Users/nickt_000/Documents/GitHub/globalazurebootcampreport/GlobalAzureBootcampReport/~/expose-loader?Components!./index.js ***!
  \*************************************************************************************************************************************/
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
	    App: __webpack_require__(/*! ../../app/components/app */ 7)
	};

/***/ },
/* 3 */
/*!************************************************************************************************************************************************************************************************************************************!*\
  !*** C:/Users/nickt_000/Documents/GitHub/globalazurebootcampreport/GlobalAzureBootcampReport/~/expose-loader?UsersStats!C:/Users/nickt_000/Documents/GitHub/globalazurebootcampreport/GlobalAzureBootcampReport/app/usersStats.js ***!
  \************************************************************************************************************************************************************************************************************************************/
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(global) {module.exports = global["UsersStats"] = __webpack_require__(/*! -!C:/Users/nickt_000/Documents/GitHub/globalazurebootcampreport/GlobalAzureBootcampReport/app/usersStats.js */ 4);
	/* WEBPACK VAR INJECTION */}.call(exports, (function() { return this; }())))

/***/ },
/* 4 */
/*!*****************************************************************************************************************!*\
  !*** C:/Users/nickt_000/Documents/GitHub/globalazurebootcampreport/GlobalAzureBootcampReport/app/usersStats.js ***!
  \*****************************************************************************************************************/
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
/*!****************************************************************************************************************************************************************************************************************************!*\
  !*** C:/Users/nickt_000/Documents/GitHub/globalazurebootcampreport/GlobalAzureBootcampReport/~/expose-loader?Tweets!C:/Users/nickt_000/Documents/GitHub/globalazurebootcampreport/GlobalAzureBootcampReport/app/tweets.js ***!
  \****************************************************************************************************************************************************************************************************************************/
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(global) {module.exports = global["Tweets"] = __webpack_require__(/*! -!C:/Users/nickt_000/Documents/GitHub/globalazurebootcampreport/GlobalAzureBootcampReport/app/tweets.js */ 6);
	/* WEBPACK VAR INJECTION */}.call(exports, (function() { return this; }())))

/***/ },
/* 6 */
/*!*************************************************************************************************************!*\
  !*** C:/Users/nickt_000/Documents/GitHub/globalazurebootcampreport/GlobalAzureBootcampReport/app/tweets.js ***!
  \*************************************************************************************************************/
/***/ function(module, exports, __webpack_require__) {

	var newTweetsCallback;
	
	var tweets = {
	    addChangeListener: function (callback) {
	        newTweetsCallback = callback;
	    },
	
	    updateTweetsList: function (newTweets) {
	        newTweetsCallback(newTweets);
	    }
	};
	
	module.exports = tweets;

/***/ },
/* 7 */
/*!**********************************************************************************************************************!*\
  !*** C:/Users/nickt_000/Documents/GitHub/globalazurebootcampreport/GlobalAzureBootcampReport/app/components/app.jsx ***!
  \**********************************************************************************************************************/
/***/ function(module, exports, __webpack_require__) {

	var React = __webpack_require__(/*! react */ 8);
	var ReactBootstrap = __webpack_require__(/*! reactBootstrap */ 9);
	
	var NavigationBar = __webpack_require__(/*! ./navigationBar */ 10);
	var UsersStatsList = __webpack_require__(/*! ./usersStatsList */ 11);
	var TweetsList = __webpack_require__(/*! ./tweetsList */ 12);
	var SecurityController = __webpack_require__(/*! ./securityController */ 13);
	
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
/* 8 */
/*!************************!*\
  !*** external "React" ***!
  \************************/
/***/ function(module, exports, __webpack_require__) {

	module.exports = React;

/***/ },
/* 9 */
/*!*********************************!*\
  !*** external "ReactBootstrap" ***!
  \*********************************/
/***/ function(module, exports, __webpack_require__) {

	module.exports = ReactBootstrap;

/***/ },
/* 10 */
/*!********************************************************************************************************************************!*\
  !*** C:/Users/nickt_000/Documents/GitHub/globalazurebootcampreport/GlobalAzureBootcampReport/app/components/navigationBar.jsx ***!
  \********************************************************************************************************************************/
/***/ function(module, exports, __webpack_require__) {

	var React = __webpack_require__(/*! react */ 8);
	var ReactBootstrap = __webpack_require__(/*! reactBootstrap */ 9);
	
	var ____Class1=React.Component;for(var ____Class1____Key in ____Class1){if(____Class1.hasOwnProperty(____Class1____Key)){NavigationBar[____Class1____Key]=____Class1[____Class1____Key];}}var ____SuperProtoOf____Class1=____Class1===null?null:____Class1.prototype;NavigationBar.prototype=Object.create(____SuperProtoOf____Class1);NavigationBar.prototype.constructor=NavigationBar;NavigationBar.__superConstructor__=____Class1;function NavigationBar(){"use strict";if(____Class1!==null){____Class1.apply(this,arguments);}}
		Object.defineProperty(NavigationBar.prototype,"render",{writable:true,configurable:true,value:function() {"use strict";
			var navBarHeader = (
				React.createElement("a", {href: "/"}, 
					React.createElement("img", {src: "/Content/images/2015-logo-inverted-small.png", alt: "Global Azure Bootcamp 2015"})
				)	
			);
			var Navbar = ReactBootstrap.Navbar;
			var NavItem = ReactBootstrap.NavItem;
	
			return (			
				React.createElement(Navbar, {fixedTop: true, brand: navBarHeader}, 
					React.createElement(ReactBootstrap.Nav, {navbar: true, right: true}, 
						React.createElement(NavItem, {href: "http://skg.azurebootcamp.net/", target: "_blank"}, "Azure Bootcamp"), 
						React.createElement(NavItem, {href: "https://github.com/xabikos/globalazurebootcampreport", target: "_blank"}, "Github")
					)
				)
			);
	  }});
	
	
	module.exports = NavigationBar;

/***/ },
/* 11 */
/*!*********************************************************************************************************************************!*\
  !*** C:/Users/nickt_000/Documents/GitHub/globalazurebootcampreport/GlobalAzureBootcampReport/app/components/usersStatsList.jsx ***!
  \*********************************************************************************************************************************/
/***/ function(module, exports, __webpack_require__) {

	var React = __webpack_require__(/*! react */ 8);
	var ReactBootstrap = __webpack_require__(/*! reactBootstrap */ 9);
	
	var usersStats = __webpack_require__(/*! ../usersStats */ 4);
	
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
					React.createElement("div", {className: "userImage"}, 
						React.createElement("a", {href: userStat.ProfileUrl, target: "_blank"}, 
							React.createElement("img", {src: userStat.ImageUrl})
						)
					), 
					React.createElement("div", {className: "userInfo"}, 
						React.createElement("div", {className: "userName"}, React.createElement("a", {href: userStat.ProfileUrl, target: "_blank"}, "@", userStat.Name)), 
						React.createElement("div", {className: "userCounter"}, userStat.TweetsNumber, " tweets")
					)
				);}
			);
	
			return (		
				React.createElement(ReactBootstrap.Panel, {className: "userStats", header: "Users Statistcis", bsStyle: "info"}, 				
					React.createElement("ul", null, 
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
/* 12 */
/*!*****************************************************************************************************************************!*\
  !*** C:/Users/nickt_000/Documents/GitHub/globalazurebootcampreport/GlobalAzureBootcampReport/app/components/tweetsList.jsx ***!
  \*****************************************************************************************************************************/
/***/ function(module, exports, __webpack_require__) {

	var React = __webpack_require__(/*! react */ 8);
	var ReactBootstrap = __webpack_require__(/*! reactBootstrap */ 9);
	
	var tweets = __webpack_require__(/*! ../tweets */ 6);
	
	var TweetsList = React.createClass({displayName: "TweetsList",
		
		getInitialState:function(){
			return {tweets: this.props.tweets};
		},
	
		componentDidMount:function(){
			tweets.addChangeListener(this.onChange);
		},
	
		render:function() {
			var tweets = this.state.tweets.map(function(tweet)  {
				var userProfileUrl = "https://www.twitter.com/" + tweet.ScreenName;
				var tweetUrl = "http://twitter.com/" + tweet.ScreenName +"/status/" + tweet.TweetId;
				return(
					React.createElement("div", {className: "tweetContainer"}, 
					React.createElement("div", {className: "tweetHeader"}, 
							React.createElement("a", {href: userProfileUrl, target: "_blank"}, "@", tweet.User)
						), 
						React.createElement("div", {className: "tweetBody"}, tweet.Text), 
						
						React.createElement("div", {className: "tweetFooter"}, 
							React.createElement("a", {href: tweetUrl, target: "_blank"}, 
								"View"
							), 
							React.createElement("span", null, 
								tweet.CreatedAt
							)
						), 
						React.createElement("hr", null)
					)				
				)
			});
			return (		
				React.createElement(ReactBootstrap.Panel, {header: "GlobalAzure timeline", bsStyle: "success"}, 
					tweets				
				)
			);
		},
	
		onChange:function(newTweets){
			var tweets = this.state.tweets;
			newTweets.map(function(tweet)
				{return tweets.unshift(tweet);}
			);
			this.setState({tweets: tweets});
		}
	});
	
	module.exports = TweetsList;

/***/ },
/* 13 */
/*!*************************************************************************************************************************************!*\
  !*** C:/Users/nickt_000/Documents/GitHub/globalazurebootcampreport/GlobalAzureBootcampReport/app/components/securityController.jsx ***!
  \*************************************************************************************************************************************/
/***/ function(module, exports, __webpack_require__) {

	var React = __webpack_require__(/*! react */ 8);
	
	var LoginForm = __webpack_require__(/*! ./LoginForm */ 14);
	var RegistrationForm = __webpack_require__(/*! ./RegistrationForm */ 15);
	var UserInfo = __webpack_require__(/*! ./UserInfo */ 16);
	var Footer = __webpack_require__(/*! ./Footer */ 17);
	
	var security = __webpack_require__(/*! ../security */ 18);
	
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
					(React.createElement("div", null, 
						React.createElement(UserInfo, {user: this.state.user}), 
						React.createElement(Footer, null)
					)) :
					(React.createElement("div", null, 
						React.createElement(LoginForm, null), 
						React.createElement(RegistrationForm, null), 
						React.createElement(Footer, null)
					))
			);
		},
	
		onChange:function(status){
			this.setState({isAuthenticated: status.isAuthenticated});
		}
	});
	 
	module.exports = SecurityController;

/***/ },
/* 14 */
/*!****************************************************************************************************************************!*\
  !*** C:/Users/nickt_000/Documents/GitHub/globalazurebootcampreport/GlobalAzureBootcampReport/app/components/LoginForm.jsx ***!
  \****************************************************************************************************************************/
/***/ function(module, exports, __webpack_require__) {

	var React = __webpack_require__(/*! react */ 8);
	var ReactBootstrap = __webpack_require__(/*! reactBootstrap */ 9);
	
	var security = __webpack_require__(/*! ../security */ 18);
	
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
/* 15 */
/*!***********************************************************************************************************************************!*\
  !*** C:/Users/nickt_000/Documents/GitHub/globalazurebootcampreport/GlobalAzureBootcampReport/app/components/RegistrationForm.jsx ***!
  \***********************************************************************************************************************************/
/***/ function(module, exports, __webpack_require__) {

	var React = __webpack_require__(/*! react */ 8);
	var ReactBootstrap = __webpack_require__(/*! reactBootstrap */ 9);
	
	var security = __webpack_require__(/*! ../security */ 18);
	
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
/* 16 */
/*!***************************************************************************************************************************!*\
  !*** C:/Users/nickt_000/Documents/GitHub/globalazurebootcampreport/GlobalAzureBootcampReport/app/components/UserInfo.jsx ***!
  \***************************************************************************************************************************/
/***/ function(module, exports, __webpack_require__) {

	var React = __webpack_require__(/*! react */ 8);
	var ReactBootstrap = __webpack_require__(/*! reactBootstrap */ 9);
	
	var security = __webpack_require__(/*! ../security */ 18);
	
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
/* 17 */
/*!*************************************************************************************************************************!*\
  !*** C:/Users/nickt_000/Documents/GitHub/globalazurebootcampreport/GlobalAzureBootcampReport/app/components/Footer.jsx ***!
  \*************************************************************************************************************************/
/***/ function(module, exports, __webpack_require__) {

	var React = __webpack_require__(/*! react */ 8);
	var ReactBootstrap = __webpack_require__(/*! reactBootstrap */ 9);
	
	var Footer = React.createClass({displayName: "Footer",
		render:function() {
			return (		
				React.createElement("div", null, 
					"Created by ", React.createElement("a", {href: "http://xabikos.com", target: "_blank"}, "xabikos"), React.createElement("br", null), 
					"Hosted by ", React.createElement("a", {href: "http://azure.microsoft.com/en-us/", target: "_blank"}, "Microsoft Azure"), React.createElement("br", null), 
					"Powered by ", React.createElement("a", {href: "https://facebook.github.io/react/", target: "_blank"}, "ReactJS"), " and ", React.createElement("a", {href: "http://reactjs.net/", target: "_blank"}, "ReactJS.NET"), React.createElement("br", null), 
					"Source code on ", React.createElement("a", {href: "https://github.com/xabikos/globalazurebootcampreport", target: "_blank"}, "Github"), React.createElement("br", null)
				)
			);
		}
	});
	
	module.exports = Footer;

/***/ },
/* 18 */
/*!***************************************************************************************************************!*\
  !*** C:/Users/nickt_000/Documents/GitHub/globalazurebootcampreport/GlobalAzureBootcampReport/app/security.js ***!
  \***************************************************************************************************************/
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

/***/ }
/******/ ]);
//# sourceMappingURL=client.bundle.js.map