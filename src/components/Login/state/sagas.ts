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
import { showNotification } from '../../Notification/state/slice';
import { showSpinner, hideSpinner } from '../../Spinner/state/slice';
import { NotificationKind } from '../../../types';

export function* login({ payload }: any) { // TODO: fix action
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
    yield put(logoutSuccess());
  } catch (err) {
    yield put(logoutError());
  } finally { 
    yield put(hideSpinner());
  }
}

const saga: any = [
  takeLatest(loginRequest, login),
  takeLatest(logoutRequest, logout),
];

export default saga;
