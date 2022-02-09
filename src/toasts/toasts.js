import { toast } from 'react-toastify';

toast.configure({
  autoClose: true,
  closeOnClick: true,
  position: 'top-right',
  theme: 'colored',
});

export default {
  toastSuccess: toast.success,
  toastError: toast.error,
  toastWarning: toast.warn,
};
