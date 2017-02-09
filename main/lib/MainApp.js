'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactDom = require('react-dom');

var _reactDom2 = _interopRequireDefault(_reactDom);

var _HelloWorldComponent = require('./HelloWorldComponent');

var _HelloWorldComponent2 = _interopRequireDefault(_HelloWorldComponent);

var _ComponentRegistry = require('./ComponentRegistry');

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