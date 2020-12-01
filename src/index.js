import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';

import store from './redux-modules/store';

import App from './components/App/App';

const rootElement = document.getElementById('app');

render(
  <Provider store={store}>
    <App />
  </Provider>,
  rootElement,
);
