import { action } from 'typesafe-actions';
import { LoginUserProps, LogoutUserProps, UserTypes } from './types';

export const loginUserAction = (
  email: string,
  password: string,
): LoginUserProps => action(UserTypes.LOGIN_USER, { email, password });

export const logoutUserAction = (): LogoutUserProps =>
  action(UserTypes.LOGOUT_USER);
