import React from 'react';
import ReactDOM from 'react-dom';

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
    this.setState({ components: this._loadComponents() }, this._renderPlugins);
  },

  _renderPlugins() {
    const componentNames = Object.keys(this.state.components);

    componentNames.forEach(name => {
      try {
        ReactDOM.render(React.createElement(this.state.components[name], { key: name }), this.refs[name]);
      } catch (e) {
        console.error(`There was an error while loading the plugin ${name}: `, e);
        ReactDOM.render(<p style={{ color: 'red' }}>Error loading plugin {name}</p>, this.refs[name]);
      }
    });
  },

  render() {
    const componentNames = Object.keys(this.state.components);

    return (
      <div>
        <div>
          <HelloWorldComponent message="This is dog!" />
        </div>
        <div>
          <p>Plugin components: {componentNames.join(', ')}</p>
          {componentNames.map(name => <div ref={name} key={name} />)}
        </div>
      </div>
    );
  },
});

export default MainApp;
