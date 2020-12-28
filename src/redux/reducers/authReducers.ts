import {
  LOGIN,
  LOGOUT,
  authReducerInitialStateType,
  authActionTypes,
} from '../actionTypes';
import generateTokenID from '../../utilts';

const initialState: authReducerInitialStateType = {
  user: {
    name: null,
    id: null,
    token: null,
  },
};
const authReducer = (
  state = initialState,
  action: authActionTypes
): authReducerInitialStateType => {
  const tokenData = generateTokenID();
  switch (action.type) {
    case LOGIN:
      localStorage.setItem('token', tokenData.token);
      return { ...state, user: { ...action.payload, ...tokenData } };
    case LOGOUT:
      localStorage.clear();
      return { ...state, user: { ...initialState.user } };
    default:
      return state;
  }
};
export default authReducer;
