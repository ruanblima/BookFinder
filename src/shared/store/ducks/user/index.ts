import { Reducer } from 'redux';

import { UserState, UserTypes } from './types';

const INITIAL_STATE: UserState = {
  currentUser: {
    email: '',
    password: '',
  },
  isLogged: false,
};

const reducer: Reducer<UserState> = (
  state = INITIAL_STATE,
  { type, payload },
) => {
  switch (type) {
    case UserTypes.LOGIN_USER:
      return {
        ...state,
        isLogged: true,
        currentUser: {
          ...state.currentUser,
          email: payload.email,
          password: payload.password,
        },
      };
    case UserTypes.LOGOUT_USER:
      return INITIAL_STATE;

    default:
      return state;
  }
};

export default reducer;
