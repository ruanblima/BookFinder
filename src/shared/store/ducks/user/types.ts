import { Action } from 'redux';

export enum UserTypes {
  LOGIN_USER = '@user/LOGIN_USER',
  LOGOUT_USER = '@user/LOGOUT_USER',
}

interface UserProps {
  email: string;
  password: string;
}

export interface UserState {
  currentUser: UserProps;
  isLogged: boolean;
}

export interface LoginUserProps extends Action {
  type: UserTypes.LOGIN_USER;
  payload: { email: string; password: string };
}

export interface LogoutUserProps extends Action {
  type: UserTypes.LOGOUT_USER;
}
