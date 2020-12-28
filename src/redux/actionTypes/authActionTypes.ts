export const LOGIN = 'LOGIN';
export const LOGOUT = 'LOGOUT';

export interface LoginActionProps {
  type: typeof LOGIN;
  payload: {
    name: string;
  };
}
export interface LogoutActionProps {
  type: typeof LOGOUT;
}
export interface authReducerInitialStateType {
  user: {
    name: string | null;
    id: string | null;
    token: string | null;
  };
}

export type authActionTypes = LoginActionProps | LogoutActionProps;
