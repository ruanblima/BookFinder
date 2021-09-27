import { all, takeLatest, call, put, select } from 'redux-saga/effects';

import { searchBooks } from '~/shared/services/books';

import { BooksTypes, GetBooksProps } from './types';

import { getBooksSuccessAction, getBooksErrorAction } from './actions';
import { ApplicationState } from '~/shared/store';

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
      action.payload.index,
    );

    if (response.status >= 200 && response.status < 300) {
      const { listBooks } = yield select(
        (state: ApplicationState) => state.books,
      );

      let moreBooks = [];

      if (action.payload.index === 0) {
        moreBooks = response.data.items;
      } else {
        moreBooks = [...listBooks, ...response.data.items];
      }

      yield put(getBooksSuccessAction(moreBooks));
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
