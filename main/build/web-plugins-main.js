(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("__vendor"));
	else if(typeof define === 'function' && define.amd)
		define(["__vendor"], factory);
	else if(typeof exports === 'object')
		exports["WebPluginsMain"] = factory(require("__vendor"));
	else
		root["WebPluginsMain"] = factory(root["__vendor"]);
})(this, function(__WEBPACK_EXTERNAL_MODULE_4__) {
return /******/ (function(modules) { // webpackBootstrap
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

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _exports = __webpack_require__(1);

	Object.keys(_exports).forEach(function (key) {
	  if (key === "default" || key === "__esModule") return;
	  Object.defineProperty(exports, key, {
	    enumerable: true,
	    get: function get() {
	      return _exports[key];
	    }
	  });
	});

	__webpack_require__(6);

	var _react = __webpack_require__(3);

	var _react2 = _interopRequireDefault(_react);

	var _reactDom = __webpack_require__(7);

	var _reactDom2 = _interopRequireDefault(_reactDom);

	var _MainApp = __webpack_require__(8);

	var _MainApp2 = _interopRequireDefault(_MainApp);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	// Needed for redux-saga es6 generator support
	window.onload = function () {
	  _reactDom2.default.render(_react2.default.createElement(_MainApp2.default, null), document.getElementById('app'));
	};

	// Import all the third party stuff

/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _HelloWorldComponent = __webpack_require__(2);

	Object.defineProperty(exports, 'HelloWorldComponent', {
	  enumerable: true,
	  get: function get() {
	    return _interopRequireDefault(_HelloWorldComponent).default;
	  }
	});

	var _ComponentRegistry = __webpack_require__(5);

	Object.defineProperty(exports, 'ComponentRegistry', {
	  enumerable: true,
	  get: function get() {
	    return _interopRequireDefault(_ComponentRegistry).default;
	  }
	});

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/***/ },
/* 2 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _react = __webpack_require__(3);

	var _react2 = _interopRequireDefault(_react);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var HelloWorldComponent = _react2.default.createClass({
	  displayName: 'HelloWorldComponent',

	  propTypes: {
	    message: _react2.default.PropTypes.string
	  },

	  render: function render() {
	    return _react2.default.createElement(
	      'p',
	      null,
	      'Hello World! ',
	      this.props.message
	    );
	  }
	});

	exports.default = HelloWorldComponent;

/***/ },
/* 3 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = (__webpack_require__(4))(298);

/***/ },
/* 4 */
/***/ function(module, exports) {

	module.exports = __vendor;

/***/ },
/* 5 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	var plugins = {};
	var callbacks = [];

	var ComponentRegistry = {
	  listen: function listen(callback) {
	    console.log('callback registered');
	    callbacks.push(callback);
	  },
	  register: function register(name, plugin) {
	    console.log('registering plugin: ', name);
	    plugins[name] = plugin;
	    callbacks.forEach(function (callback) {
	      return callback.onRegister(name, plugin);
	    });
	  },
	  unregister: function unregister(name) {
	    console.log('unregistering plugin: ', name);
	    plugins.delete(name);
	    callbacks.forEach(function (callback) {
	      return callback.onUnregister(name);
	    });
	  },
	  all: function all() {
	    return plugins;
	  },
	  get: function get(name) {
	    return plugins[name];
	  }
	};

	exports.default = ComponentRegistry;

/***/ },
/* 6 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = (__webpack_require__(4))(1);

/***/ },
/* 7 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = (__webpack_require__(4))(328);

/***/ },
/* 8 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _react = __webpack_require__(3);

	var _react2 = _interopRequireDefault(_react);

	var _reactDom = __webpack_require__(7);

	var _reactDom2 = _interopRequireDefault(_reactDom);

	var _HelloWorldComponent = __webpack_require__(2);

	var _HelloWorldComponent2 = _interopRequireDefault(_HelloWorldComponent);

	var _ComponentRegistry = __webpack_require__(5);

	var _ComponentRegistry2 = _interopRequireDefault(_ComponentRegistry);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var MainApp = _react2.default.createClass({
	  displayName: 'MainApp',
	  getInitialState: function getInitialState() {
	    return {
	      components: []
	    };
	  },
	  componentDidMount: function componentDidMount() {
	    _ComponentRegistry2.default.listen({
	      onRegister: this._updateComponents,
	      onUnregister: this._updateComponents
	    });
	    this._updateComponents();
	  },
	  _loadComponents: function _loadComponents() {
	    return _ComponentRegistry2.default.all();
	  },
	  _updateComponents: function _updateComponents() {
	    this.setState({ components: this._loadComponents() }, this._renderPlugins);
	  },
	  _renderPlugins: function _renderPlugins() {
	    var _this = this;

	    var componentNames = Object.keys(this.state.components);

	    componentNames.forEach(function (name) {
	      try {
	        _reactDom2.default.render(_react2.default.createElement(_this.state.components[name], { key: name }), _this.refs[name]);
	      } catch (e) {
	        console.error('There was an error while loading the plugin ' + name + ': ', e);
	        _reactDom2.default.render(_react2.default.createElement(
	          'p',
	          { style: { color: 'red' } },
	          'Error loading plugin ',
	          name
	        ), _this.refs[name]);
	      }
	    });
	  },
	  render: function render() {
	    var componentNames = Object.keys(this.state.components);

	    return _react2.default.createElement(
	      'div',
	      null,
	      _react2.default.createElement(
	        'div',
	        null,
	        _react2.default.createElement(_HelloWorldComponent2.default, { message: 'This is dog!' })
	      ),
	      _react2.default.createElement(
	        'div',
	        null,
	        _react2.default.createElement(
	          'p',
	          null,
	          'Plugin components: ',
	          componentNames.join(', ')
	        ),
	        componentNames.map(function (name) {
	          return _react2.default.createElement('div', { ref: name, key: name });
	        })
	      )
	    );
	  }
	});

	exports.default = MainApp;

/***/ }
/******/ ])
});
;