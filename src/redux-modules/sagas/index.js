import { all } from 'redux-saga/effects';

import { watchRegisterUser } from './user';

export default function* rootSaga() {
  yield all([
    watchRegisterUser(),
  ]);
}
