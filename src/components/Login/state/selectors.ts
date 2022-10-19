import { createSelector } from 'reselect';
import { State } from './types';

export const getUser = (state: State) => state.user;

export const getUserUsername = createSelector(
  getUser,
  (user) => user?.username,
);

export const getUserIsAuthenticated = createSelector(
  getUser,
  (user) => user?.isAuthenticated,
);
