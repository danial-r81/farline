import http from './httpService';
import config from './config.json';

export const getWeekPlan = (phoneNumber) => {
   return http.get(`${config.baseUrl}/api/weekplan/${phoneNumber}/`);
};

export const getOnlineCourses = () => {
   return http.get(`${config.baseUrl}/api/onlineClass_get/`);
};

export const getPaid = (phoneNumber) => {
   return http.get(`${config.baseUrl}/api/zarin/request/${phoneNumber}/`);
};
