import React from 'react';
import { HelloWorldComponent } from 'web-plugins-main';

const PluginTwo = React.createClass({
  render() {
    return <HelloWorldComponent message="This is plugin no. 2!"/>;
  },
});

export default PluginTwo;