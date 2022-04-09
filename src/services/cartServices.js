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

export const deleteCourse = (phoneNumber, code) => {
   return http.delete(
      `${config.baseUrl}/api/delete/stuff/${phoneNumber}/${code}/`
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

export const getCartCount = (phoneNumber) => {
   return http.get(`${config.baseUrl}/api/stuff/count/${phoneNumber}/`);
};
