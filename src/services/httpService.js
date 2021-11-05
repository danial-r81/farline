import axios from 'axios';
import { toast } from 'react-toastify';

axios.defaults.headers.post['Content-Type'] = 'application/json';

axios.interceptors.request.use(null, (error) => {
  const expectedErrors =
    error.response &&
    error.response.status >= 400 &&
    error.response.status < 500;
  if (!expectedErrors) {
    console.log(error);
    toast.error('مشکلی از سمت سرور رخ داده است.', {
      position: 'top-right',
      closeButton: true,
    });
  }

  return Promise.reject(error);
});

export default {
  get: axios.get,
  post: axios.post,
  put: axios.put,
  delte: axios.delete,
};
