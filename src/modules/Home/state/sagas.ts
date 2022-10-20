import {
  takeLatest,
  put,
  select,
  SelectEffect,
  PutEffect,
} from 'redux-saga/effects';
import { imagesRequest, imagesSuccess, imagesError, changeImagePage } from './slice';
import { getHomeImagesPage, getHomeImagesQuery } from './selectors';
import {  ImageData, ImageRaw } from '../types';
import { showSpinner, hideSpinner } from '../../Spinner/state/slice';
import { showErrorNotification } from '../../Notification/state/slice';
import { PUBLIC_API_KEY } from '../../../constants';

interface ApiResponse { results: ImageRaw[], total_pages: number }

const normalizeImages = (images: ImageRaw[]): ImageData[]  => {
  const normalizedImages = images.map((image: ImageRaw) => ({
    id: image?.id || 0,
    url: image?.urls?.small || '',
    alt: image?.alt_description || '',
  }));
  return normalizedImages;
};

export function* getImages(): Generator<
  SelectEffect | Promise<ApiResponse> | PutEffect,
  void,
  ApiResponse
> {
  try {
    yield put(showSpinner());
    const page = yield select(getHomeImagesPage);
    const query = yield select(getHomeImagesQuery);
    const data = yield fetch(`https://api.unsplash.com/search/photos?page=${page}&query=${query}&client_id=${PUBLIC_API_KEY}`)
      .then(result => result.json());
    const imagesRaw: ImageRaw[] = data?.results || [];
    const images = normalizeImages(imagesRaw);
    const totalPages = data?.total_pages || 0;
    yield put(imagesSuccess({ images, totalPages }));
    if (!images.length) { 
      yield put(
        showErrorNotification({
          message: 'No images found',
        }),
      );
    }
  } catch (err) {
    yield put(imagesError());
    yield put(
      showErrorNotification({
        message: 'Error during images request',
      }),
    );
  } finally {
    yield put(hideSpinner());
  }
}

const saga = [
  takeLatest(imagesRequest, getImages),
  takeLatest(changeImagePage, getImages),
];

export default saga;
