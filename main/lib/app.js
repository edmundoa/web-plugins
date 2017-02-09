'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _exports = require('./exports');

Object.keys(_exports).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _exports[key];
    }
  });
});

require('babel-polyfill');

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactDom = require('react-dom');

var _reactDom2 = _interopRequireDefault(_reactDom);

var _MainApp = require('./MainApp');

var _MainApp2 = _interopRequireDefault(_MainApp);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// Needed for redux-saga es6 generator support
window.onload = function () {
  _reactDom2.default.render(_react2.default.createElement(_MainApp2.default, null), document.getElementById('app'));
};

// Import all the third party stuff