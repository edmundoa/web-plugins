import React from 'react';
import { HelloWorldComponent } from 'web-plugins-main';

const PluginOne = React.createClass({
  render() {
    return <HelloWorldComponent message="This is plugin one!"/>;
  },
});

export default PluginOne;