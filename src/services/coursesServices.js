import config from './config.json';
import http from './httpService';
import Cookies from 'js-cookie';

export const getSelectedCourses = (grade, topic) => {
   return http.get(`${config.baseUrl}/api/courses/${grade}/${topic}/`);
};
