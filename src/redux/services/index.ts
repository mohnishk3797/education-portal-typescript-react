import education from './education.services';

export const API_URL = 'http://universities.hipolabs.com';

export default {
  education: education(API_URL),
};
