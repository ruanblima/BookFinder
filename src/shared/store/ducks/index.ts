import { combineReducers } from 'redux';

import font from './font';
import theme from './theme';
import books from '~/modules/Books/store/ducks/books';
import user from './user';

export default combineReducers({ font, theme, books, user });
