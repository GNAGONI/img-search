import React, { ReactElement } from 'react';
import { Provider } from 'react-redux';
import createSagaMiddleware from 'redux-saga';
import { configureStore } from '@reduxjs/toolkit';
import logger from 'redux-logger';
import rootSaga from './rootSaga';
import userReducer from '../components/Login/state/slice';

const sagaMiddleware = createSagaMiddleware();

type Props = {
  children: ReactElement,
}

const setupStore = () => {
  const store = configureStore({
    reducer: {
      user: userReducer,
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware({ thunk: false })
      .concat(sagaMiddleware) // TODO: check for prepend
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
