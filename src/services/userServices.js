import axios from 'axios';
import config from './config.json';
import http from './httpService';

export const userRegister = (user) => {
  return http.post(`${config.baseUrl}/api/user/create/`, JSON.stringify(user));
};

export const fillProfile = (user, phoneNumber) => {
  return http.post(
    `${config.baseUrl}/api/user/update/${phoneNumber}/`,
    JSON.stringify(user)
  );
};

export const userLogin = (user, phoneNumber) => {
  console.log(phoneNumber);
  return http.post(
    `${config.baseUrl}/api/user/login/${phoneNumber}`,
    JSON.stringify(user)
  );
};

export const resendCode = (phoneNumber) => {
  console.log(phoneNumber);
  return http.post(`${config.baseUrl}/api/user/code/again/${phoneNumber}/`);
};
