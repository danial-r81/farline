import config from './config.json';
import http from './httpService';

export const getCoursesPackages = () => {
   return http.get(`${config.baseUrl}/api/package/`);
};
