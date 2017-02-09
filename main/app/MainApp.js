import React from 'react';

import HelloWorldComponent from './HelloWorldComponent';
import ComponentRegistry from './ComponentRegistry';

const MainApp = React.createClass({
  getInitialState() {
    return {
      components: [],
    };
  },

  componentDidMount() {
    ComponentRegistry.listen({
      onRegister: this._updateComponents,
      onUnregister: this._updateComponents,
    });
    this._updateComponents();
  },

  _loadComponents() {
    return ComponentRegistry.all();
  },

  _updateComponents() {
    this.setState({ components: this._loadComponents() });
  },

  render() {
    const componentNames = Object.keys(this.state.components);
    console.log('rendering', componentNames);

    return (
      <div>
        <div>
          <HelloWorldComponent message="This is dog!"/>
        </div>
        <div>
          <p>Plugin components:</p>
          {componentNames.map(name => React.createElement(this.state.components[name], { key: name }))}
        </div>
      </div>
    );
  }
});

export default MainApp;
