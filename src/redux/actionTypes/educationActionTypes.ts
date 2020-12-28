export const ADD_EDUCATION = 'ADD_EDUCATION';

export interface universityData {
  alpha_two_code: string;
  country: string;
  domains: string[];
  name: string;
  'state-province': null | string;
  web_pages: string[];
}

export interface educationAddData {
  university: universityData | null;
  degree: string;
  fieldOfStudy: string;
  grade: string;
  discription: string;
  startYear: string;
  endYear: string;
}

export interface educationData {
  id: string;
  university: universityData | null;
  degree: string;
  fieldOfStudy: string;
  grade: string;
  discription: string;
  startYear: string;
  endYear: string;
}

export interface educationInitialState {
  education: educationData[];
}

export interface addEducationProps {
  type: typeof ADD_EDUCATION;
  payload: educationAddData;
}

export type educationActionTypes = addEducationProps;
