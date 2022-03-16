import http from './httpService';
import config from './config.json';

export const addCourseToCart = (arg) => {
   return http.get(
      `${config.baseUrl}/api/add/stuff/${arg.phoneNumber}/${arg.code}/`
   );
};

export const getUserCartItems = (phoneNumber) => {
   return http.get(`${config.baseUrl}/api/get_cart/${phoneNumber}/`);
};

export const deleteCourse = (arg) => {
   return http.delete(
      `${config.baseUrl}/api/delete/stuff/${arg.phoneNumber}/${arg.code}/`
   );
};

export const getTotalPrice = (phoneNumber) => {
   return http.get(`${config.baseUrl}/api/get_total/${phoneNumber}/`);
};

export const getDiscount = (phoneNumber, disCountCode) => {
   return http.get(
      `${config.baseUrl}/api/apply_coupon/${phoneNumber}/${disCountCode}/`
   );
};
