'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _HelloWorldComponent = require('./HelloWorldComponent');

Object.defineProperty(exports, 'HelloWorldComponent', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_HelloWorldComponent).default;
  }
});

var _ComponentRegistry = require('./ComponentRegistry');

Object.defineProperty(exports, 'ComponentRegistry', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_ComponentRegistry).default;
  }
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }