// Needed for redux-saga es6 generator support
import 'babel-polyfill';

// Import all the third party stuff
import React from 'react';
import ReactDOM from 'react-dom';

import MainApp from './MainApp';

window.onload = () => {
  ReactDOM.render(
    <MainApp />,
    document.getElementById('app')
  );
};

export * from './exports';
