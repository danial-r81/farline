import axios from 'axios';
import Toast from '../toasts/toasts';
import config from './config.json';

axios.defaults.headers.post['Content-Type'] = 'application/json';
// axios.defaults.xsrfHeaderName = 'X-CSRFToken';
// axios.defaults.withCredentials = true;
// axios.defaults.xsrfCookieName = 'csrftoken';
// axios.defaults.xsrfHeaderName = 'X-CSRFToken';

axios.interceptors.request.use(null, (error) => {
   const expectedErrors =
      error.response &&
      error.response.status >= 400 &&
      error.response.status < 500;
   if (!expectedErrors) {
      console.log(error);
      Toast.toastError('مشکلی از سمت سرور رخ داده است.');
   }

   return Promise.reject(error);
});



axios.create({
   baseURL: config.baseUrl,
});

export default {
   get: axios.get,
   post: axios.post,
   put: axios.put,
   delete: axios.delete,
};
