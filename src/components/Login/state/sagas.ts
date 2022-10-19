import {
  takeLatest,
  put,
} from 'redux-saga/effects';
import { loginRequest, loginSuccess, loginError } from './slice';

export function* login({ payload }: any) { // TODO: fix action
  try {
    const username = payload?.username;
    yield put(loginSuccess({ username }));
  } catch (err) {
    yield put(loginError());
  }
}

const saga: any = [
  takeLatest(loginRequest, login),
];

export default saga;
