import { action } from 'typesafe-actions';
import {
  LoginUserProps,
  LogoutUserProps,
  UserTypes,
  SaveInformationUserProps,
  UserProps,
} from './types';

export const loginUserAction = (
  email: string,
  password: string,
): LoginUserProps => action(UserTypes.LOGIN_USER, { email, password });

export const logoutUserAction = (): LogoutUserProps =>
  action(UserTypes.LOGOUT_USER);

export const saveInformationUserAction = (
  currentUser: UserProps,
): SaveInformationUserProps =>
  action(UserTypes.SAVE_INFORMATION_USER, { currentUser });
