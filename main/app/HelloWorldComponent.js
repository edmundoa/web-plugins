import React from 'react';

const HelloWorldComponent = React.createClass({
  propTypes: {
    message: React.PropTypes.string,
  },

  render() {
    return <p>Hello World! {this.props.message}</p>;
  }
});

export default HelloWorldComponent;
