import { combineReducers } from 'redux';

import font from './font';
import theme from './theme';
import books from './books';
import user from './user';

export default combineReducers({ font, theme, books, user });
