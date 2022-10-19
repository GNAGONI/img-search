import {
  takeLatest,
  put,
} from 'redux-saga/effects';
import { imagesRequest, imagesSuccess, imagesError } from './slice';
import { showSpinner, hideSpinner } from '../../Spinner/state/slice';
import { showNotification } from '../../Notification/state/slice';
import { NotificationKind } from '../../../types';
import { PUBLIC_API_KEY } from '../../../constants';

interface ApiResponse { results: any[], total_pages: number }

export function* getImages({ payload: { search } }: any): Generator<
  any,
  any,
  ApiResponse
> {
  try {
    yield put(showSpinner());
    const data = yield fetch(`https://api.unsplash.com/search/photos?page=1&query=${search}&client_id=${PUBLIC_API_KEY}`)
      .then(result => result.json());
    const images = data?.results || [];
    const totalPages = data?.total_pages || 0;
    yield put(imagesSuccess({ images, totalPages }));
    if (images.length) {
      yield put(
        showNotification({
          message: 'Images successfully received',
          kind: NotificationKind.SUCCESS,
        }),
      );
    } else { 
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

const saga: any = [
  takeLatest(imagesRequest, getImages),
];

export default saga;
