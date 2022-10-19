import { createSelector } from 'reselect';
import { State } from '../../../types';

export const getHome = (state: State) => state.home;

export const getHomeImages = createSelector(
  getHome,
  (home) => home?.images,
);
