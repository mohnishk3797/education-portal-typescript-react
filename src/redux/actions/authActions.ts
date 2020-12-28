import {
  LOGIN,
  LOGOUT,
  LoginActionProps,
  LogoutActionProps,
} from '../actionTypes';

export const loginAction = (payload: { name: string }): LoginActionProps => {
  return {
    type: LOGIN,
    payload,
  };
};
export const logoutAction = (): LogoutActionProps => {
  return {
    type: LOGOUT,
  };
};
