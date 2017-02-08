// Needed for redux-saga es6 generator support
import 'babel-polyfill';

// Import all the third party stuff
import React from 'react';
import ReactDOM from 'react-dom';

import HelloWorldComponent from './HelloWorldComponent';

ReactDOM.render(
  <div>
    <HelloWorldComponent message="This is dog!"/>
  </div>,
  document.getElementById('app')
);
