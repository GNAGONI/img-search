import { createSelector } from 'reselect';
import { State } from '../../../types';

export const getHome = (state: State) => state.home;

export const getHomeImages = createSelector(
  getHome,
  (home) => home?.images,
);

export const getHomeImagesPage = createSelector(
  getHome,
  (home) => home?.page,
);

export const getHomeImagesTotalPages = createSelector(
  getHome,
  (home) => home?.totalPages,
);

export const getHomeImagesQuery = createSelector(
  getHome,
  (home) => home?.query,
);