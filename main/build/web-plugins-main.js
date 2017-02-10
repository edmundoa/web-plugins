(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("__vendor"));
	else if(typeof define === 'function' && define.amd)
		define(["__vendor"], factory);
	else if(typeof exports === 'object')
		exports["WebPluginsMain"] = factory(require("__vendor"));
	else
		root["WebPluginsMain"] = factory(root["__vendor"]);
})(this, function(__WEBPACK_EXTERNAL_MODULE_1__) {
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
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.l = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };

/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};

/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};

/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 8);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(1))(195);

/***/ }),
/* 1 */
/***/ (function(module, exports) {

module.exports = __vendor;

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(1))(194);

/***/ }),
/* 3 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
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

/* harmony default export */ __webpack_exports__["a"] = ComponentRegistry;

/***/ }),
/* 4 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);


var HelloWorldComponent = __WEBPACK_IMPORTED_MODULE_0_react___default.a.createClass({
  displayName: 'HelloWorldComponent',

  propTypes: {
    message: __WEBPACK_IMPORTED_MODULE_0_react___default.a.PropTypes.string
  },

  render: function render() {
    return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
      'p',
      null,
      'Hello World! ',
      this.props.message
    );
  }
});

/* harmony default export */ __webpack_exports__["a"] = HelloWorldComponent;

/***/ }),
/* 5 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_dom__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_dom___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react_dom__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__HelloWorldComponent__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ComponentRegistry__ = __webpack_require__(3);






var MainApp = __WEBPACK_IMPORTED_MODULE_0_react___default.a.createClass({
  displayName: 'MainApp',
  getInitialState: function getInitialState() {
    return {
      components: []
    };
  },
  componentDidMount: function componentDidMount() {
    __WEBPACK_IMPORTED_MODULE_3__ComponentRegistry__["a" /* default */].listen({
      onRegister: this._updateComponents,
      onUnregister: this._updateComponents
    });
    this._updateComponents();
  },
  _loadComponents: function _loadComponents() {
    return __WEBPACK_IMPORTED_MODULE_3__ComponentRegistry__["a" /* default */].all();
  },
  _updateComponents: function _updateComponents() {
    this.setState({ components: this._loadComponents() }, this._renderPlugins);
  },
  _renderPlugins: function _renderPlugins() {
    var _this = this;

    var componentNames = Object.keys(this.state.components);

    componentNames.forEach(function (name) {
      try {
        __WEBPACK_IMPORTED_MODULE_1_react_dom___default.a.render(__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(_this.state.components[name], { key: name }), _this.refs[name]);
      } catch (e) {
        console.error('There was an error while loading the plugin ' + name + ': ', e);
        __WEBPACK_IMPORTED_MODULE_1_react_dom___default.a.render(__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
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

    return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
      'div',
      null,
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        'div',
        null,
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2__HelloWorldComponent__["a" /* default */], { message: 'This is dog!' })
      ),
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        'div',
        null,
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          'p',
          null,
          'Plugin components: ',
          componentNames.join(', ')
        ),
        componentNames.map(function (name) {
          return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', { ref: name, key: name });
        })
      )
    );
  }
});

/* harmony default export */ __webpack_exports__["a"] = MainApp;

/***/ }),
/* 6 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__HelloWorldComponent__ = __webpack_require__(4);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__HelloWorldComponent__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ComponentRegistry__ = __webpack_require__(3);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return __WEBPACK_IMPORTED_MODULE_1__ComponentRegistry__["a"]; });



/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(1))(193);

/***/ }),
/* 8 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_polyfill__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_polyfill___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_polyfill__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react_dom__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react_dom___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_react_dom__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__MainApp__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__exports__ = __webpack_require__(6);
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "HelloWorldComponent", function() { return __WEBPACK_IMPORTED_MODULE_4__exports__["a"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "ComponentRegistry", function() { return __WEBPACK_IMPORTED_MODULE_4__exports__["b"]; });
// Needed for redux-saga es6 generator support


// Import all the third party stuff





window.onload = function () {
  __WEBPACK_IMPORTED_MODULE_2_react_dom___default.a.render(__WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3__MainApp__["a" /* default */], null), document.getElementById('app'));
};



/***/ })
/******/ ]);
});