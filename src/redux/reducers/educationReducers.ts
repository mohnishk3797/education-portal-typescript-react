import {
  ADD_EDUCATION,
  educationInitialState,
  educationActionTypes,
} from '../actionTypes';
import generateTokenID from '../../utilts';

const initialState: educationInitialState = {
  education: [],
};
const educationReducer = (
  state = initialState,
  action: educationActionTypes
): educationInitialState => {
  const idData = generateTokenID();
  switch (action.type) {
    case ADD_EDUCATION:
      return {
        ...state,
        education: state.education.concat({ ...action.payload, id: idData.id }),
      };
    default:
      return state;
  }
};
export default educationReducer;
