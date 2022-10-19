import React, { ReactElement } from 'react';
import { Provider } from 'react-redux';
import createSagaMiddleware from 'redux-saga';
import { configureStore } from '@reduxjs/toolkit';
import logger from 'redux-logger';
import { all } from 'redux-saga/effects';
import userSagas from '../modules/Login/state/sagas';
import userReducer from '../modules/Login/state/slice';
import homeSagas from '../modules/Home/state/sagas';
import homeReducer from '../modules/Home/state/slice';
import spinnerReducer from '../modules/Spinner/state/slice';
import notificationReducer from '../modules/Notification/state/slice';

function* rootSaga() {
  yield all([
    ...userSagas,
    ...homeSagas,
  ]);
}

const sagaMiddleware = createSagaMiddleware();

type Props = {
  children: ReactElement,
}

const setupStore = () => {
  const store = configureStore({
    reducer: {
      user: userReducer,
      home: homeReducer,
      spinner: spinnerReducer,
      notification: notificationReducer,
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware({ thunk: false })
      .concat(sagaMiddleware)
      .concat(logger),
  });
  return store;
}

const store = setupStore();

const StateProvider = ({ children }: Props) => {
  sagaMiddleware.run(rootSaga);

  return (
    <Provider store={store}>
      {children}
    </Provider>
  );
};

export default StateProvider;
