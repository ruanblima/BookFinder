import { all, takeLatest, call, put } from 'redux-saga/effects';

import { searchBooks } from '~/shared/services/books';

import { BooksTypes, GetBooksProps } from './types';

import { getBooksSuccessAction, getBooksErrorAction } from './actions';

export interface ResponseGenerator {
  config?: any;
  data?: any;
  headers?: any;
  request?: any;
  status: number;
  statusText?: string;
}

function* getBooksSagas(action: GetBooksProps) {
  try {
    const response: ResponseGenerator = yield call(
      searchBooks,
      action.payload.text,
    );

    if (response.status >= 200 && response.status < 300) {
      yield put(getBooksSuccessAction(response.data.items));
    } else {
      yield put(getBooksErrorAction());
    }
  } catch {
    yield put(getBooksErrorAction());
  }
}

export default function* watchSaga() {
  yield all([takeLatest(BooksTypes.GET_BOOKS, getBooksSagas)]);
}
