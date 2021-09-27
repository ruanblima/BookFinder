import { all, fork } from 'redux-saga/effects';
import books from '~/modules/Books/store/ducks/books/sagas';

export default function* rootSaga() {
  yield all([fork(books)]);
}
