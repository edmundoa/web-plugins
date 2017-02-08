import React from 'react';
import { HelloWorldComponent } from 'web-plugins-main';

const Plugin = React.createClass({
  render() {
    return <HelloWorldComponent message="This is a plugin!"/>;
  },
});

export default Plugin;