import { Reducer } from 'redux';

import { UserTypes } from '~/shared/store/ducks/user/types';
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
        ...state,
        loading: true,
      };
    case BooksTypes.GET_BOOKS_SUCCESS:
      return {
        ...state,
        loading: false,
        listBooks: payload.listBooks,
        errorGetBooks: false,
      };
    case BooksTypes.GET_BOOKS_ERROR:
      return {
        ...state,
        loading: false,
        listBooks: [],
        errorGetBooks: true,
      };
    case UserTypes.LOGOUT_USER:
      return INITIAL_STATE;
    default:
      return state;
  }
};

export default reducer;
