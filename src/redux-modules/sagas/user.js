import { takeEvery, call, put } from 'redux-saga/effects';

import {
  registerUserSuccessed,
  REGISTER_REQUEST, registerUserFailed,
} from '../actions/user';
import UserService from '../../services/user';

// Register
export function* registerUser(action) {
  try {
    const data = yield call(UserService.registerUser, action.userData);

    yield put(registerUserSuccessed(data));
  } catch (error) {
    yield put(registerUserFailed(error.toString()));
  }
}

export function* watchRegisterUser() {
  yield takeEvery(REGISTER_REQUEST, registerUser);
}
