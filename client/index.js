/**
 * ************************************
 *
 * @module  index.js
 * @author
 * @date
 * @description entry point for application.  Hangs React app off of #contents in index.html
 *
 * ************************************
 */


import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import styles from './stylesheets/application.scss';
import App from './App';
import store from './store';

// might need to import styles here

render(
  <Provider store={store}>
    <App />,
  </Provider>,
  document.getElementById('root'),
);
