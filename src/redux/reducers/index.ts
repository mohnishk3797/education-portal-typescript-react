import { combineReducers } from 'redux';
import authReducer from './authReducers';
import educationReducers from './educationReducers';

export const rootReducer = combineReducers({
  auth: authReducer,
  education: educationReducers,
});

export type RootState = ReturnType<typeof rootReducer>;
