import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
/* eslint-disable import/no-extraneous-dependencies */
// import { composeWithDevTools } from 'redux-devtools-extension';
/* eslint-enable import/no-extraneous-dependencies */

import reducers from '../reducers';
import rootSaga from '../sagas';

const sagaMiddleware = createSagaMiddleware();

export default createStore(
  reducers,
  applyMiddleware(sagaMiddleware),
);

sagaMiddleware.run(rootSaga);
