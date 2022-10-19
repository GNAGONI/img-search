import {
  takeLatest,
  put,
} from 'redux-saga/effects';
import { loginRequest, loginSuccess, loginError, logoutSuccess, logoutError, logoutRequest } from './slice';

export function* login({ payload }: any) { // TODO: fix action
  try {
    const username = payload?.username;
    yield put(loginSuccess({ username }));
  } catch (err) {
    yield put(loginError());
  }
}

export function* logout() { 
  try {
    yield put(logoutSuccess());
  } catch (err) {
    yield put(logoutError());
  }
}

const saga: any = [
  takeLatest(loginRequest, login),
  takeLatest(logoutRequest, logout),
];

export default saga;
