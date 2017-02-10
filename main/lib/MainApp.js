import React from 'react';
import ReactDOM from 'react-dom';

import HelloWorldComponent from './HelloWorldComponent';
import ComponentRegistry from './ComponentRegistry';

var MainApp = React.createClass({
  displayName: 'MainApp',
  getInitialState: function getInitialState() {
    return {
      components: []
    };
  },
  componentDidMount: function componentDidMount() {
    ComponentRegistry.listen({
      onRegister: this._updateComponents,
      onUnregister: this._updateComponents
    });
    this._updateComponents();
  },
  _loadComponents: function _loadComponents() {
    return ComponentRegistry.all();
  },
  _updateComponents: function _updateComponents() {
    this.setState({ components: this._loadComponents() }, this._renderPlugins);
  },
  _renderPlugins: function _renderPlugins() {
    var _this = this;

    var componentNames = Object.keys(this.state.components);

    componentNames.forEach(function (name) {
      try {
        ReactDOM.render(React.createElement(_this.state.components[name], { key: name }), _this.refs[name]);
      } catch (e) {
        console.error('There was an error while loading the plugin ' + name + ': ', e);
        ReactDOM.render(React.createElement(
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

    return React.createElement(
      'div',
      null,
      React.createElement(
        'div',
        null,
        React.createElement(HelloWorldComponent, { message: 'This is dog!' })
      ),
      React.createElement(
        'div',
        null,
        React.createElement(
          'p',
          null,
          'Plugin components: ',
          componentNames.join(', ')
        ),
        componentNames.map(function (name) {
          return React.createElement('div', { ref: name, key: name });
        })
      )
    );
  }
});

export default MainApp;