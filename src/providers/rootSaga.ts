import { all } from 'redux-saga/effects';
import userSagas from '../components/Login/state/sagas';

export default function* rootSaga() {
  yield all([
    ...userSagas,
  ]);
}
