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
import { showNotification } from '../../Notification/state/slice';
import { showSpinner, hideSpinner } from '../../Spinner/state/slice';
import { NotificationKind } from '../../../types';

interface LoginAction { 
 payload: { username: string }
}

export function* login({ payload }: LoginAction) {
  try {
    yield put(showSpinner());
    const username = payload?.username;
    yield put(loginSuccess({ username }));
    yield put(
      showNotification({
        message: 'Successfully logged in ',
        kind: NotificationKind.SUCCESS,
      }),
    );
  } catch (err) {
    yield put(loginError());
    yield put(
      showNotification({
        message: 'Error during login',
        kind: NotificationKind.ERROR,
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
