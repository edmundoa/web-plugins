import React from 'react';
import { HelloWorldComponent } from 'web-plugins-main';

const PluginTwo = React.createClass({
  render() {
    return <HelloWorldComponent message={`You will not see this! ${lol.wut}`}/>;
  },
});

export default PluginTwo;