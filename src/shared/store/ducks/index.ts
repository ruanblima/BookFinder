import { combineReducers } from 'redux';

import font from './font';
import theme from './theme';
import books from './books';

export default combineReducers({ font, theme, books });
