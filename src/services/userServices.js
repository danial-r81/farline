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

export const forgotPassword = (phoneNumber) => {
  return http.post(
    `${config.baseUrl}/api/user/change/password/${phoneNumber}/`
  );
};

export const getAllUserData = (phoneNumber) => {
  return http.get(`${config.baseUrl}/api/user/info/${phoneNumber}/`);
};

export const changePassword = (phoneNumber, password) => {
  const danial = 'fdgfdhj67867sdfsf2343nh';

  return http.post(
    `${config.baseUrl}/api/user/change/password/${phoneNumber}/`,
    JSON.stringify({ password, danial })
  );
};
