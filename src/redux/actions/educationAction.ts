import {
  ADD_EDUCATION,
  addEducationProps,
  educationAddData,
} from '../actionTypes';

export const addEducationData = (
  payload: educationAddData
): addEducationProps => {
  return {
    type: ADD_EDUCATION,
    payload,
  };
};

export const data = '';
