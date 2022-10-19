import {
  takeLatest,
  put,
  select,
  SelectEffect,
  PutEffect,
} from 'redux-saga/effects';
import { imagesRequest, imagesSuccess, imagesError, changeImagePage } from './slice';
import { getHomeImagesPage, getHomeImagesQuery } from './selectors';
import { showSpinner, hideSpinner } from '../../Spinner/state/slice';
import { showNotification } from '../../Notification/state/slice';
import { NotificationKind, IImage, IImageRaw } from '../../../types';
import { PUBLIC_API_KEY } from '../../../constants';

interface ApiResponse { results: IImageRaw[], total_pages: number }

const normalizeImages = (images: IImageRaw[]): IImage[]  => {
  const normalizedImages = images.map((image: IImageRaw) => ({
    id: image?.id || 0,
    url: image?.urls?.small || '',
    alt: image?.alt_description || '',
  }))
  return normalizedImages;
}

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
    const imagesRaw: IImageRaw[] = data?.results || [];
    const images = normalizeImages(imagesRaw);
    const totalPages = data?.total_pages || 0;
    yield put(imagesSuccess({ images, totalPages }));
    if (!images.length) { 
      yield put(
        showNotification({
          message: 'No images found',
          kind: NotificationKind.ERROR,
        }),
      );
    }
  } catch (err) {
    yield put(imagesError());
    yield put(
      showNotification({
        message: 'Error during images request',
        kind: NotificationKind.ERROR,
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
