import { Reducer } from 'redux';
import { LIGHT, DARK } from '~/shared/constants/theme';

import { ThemeState, ThemeTypes } from './types';

const INITIAL_STATE: ThemeState = {
  theme: LIGHT,
};

const reducer: Reducer<ThemeState> = (state = INITIAL_STATE, { type }) => {
  const { theme } = state;
  switch (type) {
    case ThemeTypes.THEME_TOGGLE:
      return {
        theme: theme === LIGHT ? DARK : LIGHT,
      };
    default:
      return state;
  }
};

export default reducer;
