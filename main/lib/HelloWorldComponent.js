import React from 'react';

var HelloWorldComponent = React.createClass({
  displayName: 'HelloWorldComponent',

  propTypes: {
    message: React.PropTypes.string
  },

  render: function render() {
    return React.createElement(
      'p',
      null,
      'Hello World! ',
      this.props.message
    );
  }
});

export default HelloWorldComponent;