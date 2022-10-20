import { createSelector } from 'reselect';
import { State } from '../../../providers/StateProvider';

export const getUser = (state: State) => state.user;

export const getUserUsername = createSelector(
  getUser,
  (user) => user?.username,
);

export const getUserIsAuthenticated = createSelector(
  getUser,
  (user) => user?.isAuthenticated,
);
