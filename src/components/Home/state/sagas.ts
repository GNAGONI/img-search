import {
  takeLatest,
  put,
} from 'redux-saga/effects';
import { imagesRequest, imagesSuccess, imagesError } from './slice';

export function* getImages() {
  try {
    yield put(imagesSuccess({ images: [1, 2, 3] }));
  } catch (err) {
    yield put(imagesError());
  }
}

const saga: any = [
  takeLatest(imagesRequest, getImages),
];

export default saga;
