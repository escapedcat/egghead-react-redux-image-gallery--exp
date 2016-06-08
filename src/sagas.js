import { fetchImages } from './flickr';
import { put, take } from 'redux-saga/effects';

export function* loadImages() {
  try {
    const images = yield fetchImages();
    yield put({type: 'IMAGES_LOADED', images});
  console.log(images);
    yield put({type: 'IMAGE_SELECTED', image: images[0]});
  } catch(error) {
    yield put({type: 'IMAGE_LOAD_FAILURE', error})
  }
}

export function* watchForLoadImages() {
console.info('LOAD_IMAGES');
  while(true) {
    yield take('LOAD_IMAGES');
    yield loadImages();
  }
}