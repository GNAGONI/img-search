import { ReactElement } from 'react';
import { combineReducers } from 'redux';
import { Provider } from 'react-redux';
import createSagaMiddleware from 'redux-saga';
import { configureStore } from '@reduxjs/toolkit';
import storage from 'redux-persist/lib/storage';
import {
  persistReducer, persistStore, FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';
import { PersistGate } from 'redux-persist/integration/react';
import logger from 'redux-logger';
import { all } from 'redux-saga/effects';
import userSagas from '../modules/Login/state/sagas';
import userReducer from '../modules/Login/state/slice';
import homeSagas from '../modules/Home/state/sagas';
import homeReducer from '../modules/Home/state/slice';
import spinnerReducer from '../features/Spinner/state/slice';
import notificationReducer from '../features/Notification/state/slice';

type Props = {
  children: ReactElement,
}

function* rootSaga() {
  yield all([
    ...userSagas,
    ...homeSagas,
  ]);
}

const sagaMiddleware = createSagaMiddleware();

const persistConfig = {
  key: 'root',
  storage,
};

const rootReducer = combineReducers({
  user: userReducer,
  home: homeReducer,
  spinner: spinnerReducer,
  notification: notificationReducer,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

const setupStore = () => {
  const store = configureStore({
    reducer: persistedReducer,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware({
      thunk: false,
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    })
      .concat(sagaMiddleware)
      .concat(logger),
  });
  return store;
};

const store = setupStore();
const persistor = persistStore(store);

const StateProvider = ({ children }: Props) => {
  sagaMiddleware.run(rootSaga);

  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        {children}
      </PersistGate>
    </Provider>
  );
};

export default StateProvider;
