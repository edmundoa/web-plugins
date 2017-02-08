// Needed for redux-saga es6 generator support
import 'babel-polyfill';

// Import all the third party stuff
import React from 'react';
import ReactDOM from 'react-dom';

ReactDOM.render(
  <div>
    <p>Hello world!</p>
  </div>,
  document.getElementById('app')
);
