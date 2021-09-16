import { Reducer } from 'redux';

import { BooksTypes, BooksState } from './types';

const INITIAL_STATE: BooksState = {
  listBooks: [],
  loading: false,
  errorGetBooks: false,
};

const reducer: Reducer<BooksState> = (
  state = INITIAL_STATE,
  { type, payload },
) => {
  switch (type) {
    case BooksTypes.GET_BOOKS:
      return {
        loading: true,
      };
    case BooksTypes.GET_BOOKS_SUCCESS:
      return {
        loading: false,
        listBooks: payload.listBooks,
        errorGetBooks: false,
      };
    case BooksTypes.GET_BOOKS_ERROR:
      return {
        loading: false,
        listBooks: [],
        errorGetBooks: true,
      };
    default:
      return state;
  }
};

export default reducer;
