import http from './httpService';
import config from './config.json';

export const getWeekPlan = (phoneNumber) => {
   return http.get(`${config.baseUrl}/api/weekplan/${phoneNumber}/`);
};

export const getOnlineCourses = () => {};
