import {
  takeLatest,
  put,
  call,
  PutEffect,
  CallEffect,
} from 'redux-saga/effects';
import { imagesRequest, imagesSuccess, imagesError } from './slice';
import { PUBLIC_API_KEY } from '../../../constants';

interface ApiResponse { results: any[], total_pages: number }

export function* getImages({ payload: { search } }: any): Generator<
  any,
  any,
  ApiResponse
> {
  try {
    const data = yield fetch(`https://api.unsplash.com/search/photos?page=1&query=${search}&client_id=${PUBLIC_API_KEY}`)
      .then(result => result.json());
    const images = data?.results || [];
    const totalPages = data?.total_pages || 0;
    yield put(imagesSuccess({ images, totalPages }));
  } catch (err) {
    yield put(imagesError());
  }
}

const saga: any = [
  takeLatest(imagesRequest, getImages),
];

export default saga;
