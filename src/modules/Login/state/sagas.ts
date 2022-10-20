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
import { showSuccessNotification, showErrorNotification } from '../../../features/Notification/state/slice';
import { showSpinner, hideSpinner } from '../../../features/Spinner/state/slice';
import { Text } from '../../../constants';

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
        message: Text.SUCCESS_LOGIN_NOTIFICATION_MESSAGE,
      }),
    );
  } catch (err) {
    yield put(loginError());
    yield put(
      showErrorNotification({
        message: Text.UNEXPECTED_ERROR_DURING_LOGIN_REQUEST_MESSAGE,
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
