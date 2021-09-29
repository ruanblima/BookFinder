import { Action } from 'redux';
import { GenderProps } from '~/modules/profile/constants';

export enum UserTypes {
  LOGIN_USER = '@user/LOGIN_USER',
  LOGOUT_USER = '@user/LOGOUT_USER',
  SAVE_INFORMATION_USER = '@user/SAVE_INFORMATION_USER',
}

export interface UserProps {
  email: string;
  password: string;
  name: string;
  birthDate: string;
  imageProfile: string;
  gender: GenderProps;
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

export interface SaveInformationUserProps extends Action {
  type: UserTypes.SAVE_INFORMATION_USER;
  payload: { currentUser: UserProps };
}
