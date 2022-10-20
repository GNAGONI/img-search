import {
  takeLatest,
  put,
} from 'redux-saga/effects';
import {
  loginRequest,
  loginSuccess,
  loginError,
  logoutSuccess,
  logoutError,
  logoutRequest,
} from './slice';
import { imagesClear } from '../../Home/state/slice';
import { showSuccessNotification, showErrorNotification } from '../../Notification/state/slice';
import { showSpinner, hideSpinner } from '../../Spinner/state/slice';

interface LoginAction { 
 payload: { username: string }
}

export function* login({ payload }: LoginAction) {
  try {
    yield put(showSpinner());
    const username = payload?.username;
    yield put(loginSuccess({ username }));
    yield put(
      showSuccessNotification({
        message: 'Successfully logged in ',
      }),
    );
  } catch (err) {
    yield put(loginError());
    yield put(
      showErrorNotification({
        message: 'Error during login',
      }),
    );
  } finally { 
    yield put(hideSpinner());
  }
}

export function* logout() { 
  try {
    yield put(showSpinner());
    yield put(imagesClear());
    yield put(logoutSuccess());
  } catch (err) {
    yield put(logoutError());
  } finally { 
    yield put(hideSpinner());
  }
}

const saga = [
  takeLatest(loginRequest, login),
  takeLatest(logoutRequest, logout),
];

export default saga;
