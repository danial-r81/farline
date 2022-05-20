import http from './httpService';
import config from './config.json';

export const getWeekPlan = (phoneNumber) => {
   return http.get(`${config.baseUrl}/api/weekplan/${phoneNumber}/`);
};

export const getOnlineCourses = (phoneNumber) => {
   return http.get(`${config.baseUrl}/api/onlineClass_get/${phoneNumber}/`);
};

export const getPaid = (phoneNumber) => {
   return http.get(`${config.baseUrl}/api/zarin/request/${phoneNumber}/`);
};

export const getFinancialServices = (phoneNumber) => {
   return http.get(`${config.baseUrl}/api/get_receipts/${phoneNumber}/`);
};

export const getTimeLeftToKonkur = () => {
   return http.get(`${config.baseUrl}/api/date/`);
};
