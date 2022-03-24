import config from './config.json';
import http from './httpService';

export const getCoursesPackages = () => {
   return http.get(`${config.baseUrl}/api/package/`);
};

export const getCoursPack = (code) => {
   return http.get(`${config.baseUrl}/api/kinds/${code}/`);
};

export const getCourseItems = (code) => {
   return http.get(`${config.baseUrl}/api/courses/${code}/`);
};

export const getCourse = (code) => {
   return http.get(`${config.baseUrl}/api/course/${code}/`);
};

export const getCourseSessions = (code) => {
   return http.get(`${config.baseUrl}/api/get_session/${code}/`);
};

export const getNewsCourses = () => {
   return http.get(`${config.baseUrl}/api/fresh_course/`);
};

export const getMyCourses = (phoneNumber) => {
   return http.get(`${config.baseUrl}/api/user_courses/${phoneNumber}/`);
};

export const getSuggestedCourses = (phoneNumber) => {
   return http.get(`${config.baseUrl}/api/suggested_course/${phoneNumber}/`);
};
