'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

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