import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import Toasts from '../../toasts/toasts';
import Cookies from 'js-cookie';
import {
   resendCode,
   userRegister,
   fillProfile,
   getAllUserData,
   changePassword,
   userLogin,
   changePasswordFromPanel,
   getCsrtToken,
   getUsualQuestions,
} from '../../services/userServices';
import { getUserCartHandler } from './cart';
import Toast from '../../toasts/toasts';

export const getCodeAgain = createAsyncThunk('users/resend-code', async () => {
   try {
      const phoneNumber = localStorage.getItem('phoneNumber');
      const { data, status } = await resendCode(phoneNumber);
      if (status === 201) {
         return data;
      }
   } catch (err) {
      if (err.response) {
         return '';
      }
   }
});

export const registerHandler = createAsyncThunk(
   'user/register',
   async (arg) => {
      const { navigate, value } = arg;
      const { phoneNumber } = value;
      try {
         const { data, status } = await userRegister(value);
         const { code } = data;
         if (status === 201) {
            localStorage.setItem('phoneNumber', phoneNumber);
            navigate('/get-code');
            return {
               value,
               code,
            };
         }
      } catch (e) {
         if (e.response.status === 400) {
            Toasts.toastWarning('کاربر با این مشخصات موجود است');
         }
      }
   }
);

export const getCsrfTokenHandler = createAsyncThunk(
   'get-csrftoken',
   async () => {
      try {
         const { data, status } = await getCsrtToken();
         if (status === 200) {
            return data;
         }
      } catch (er) {}
   }
);

export const loginHandler = createAsyncThunk(
   'user/login',
   async (arg, { dispatch }) => {
      const { value, navigate } = arg;
      const { phoneNumber } = value;
      try {
         const { status } = await userLogin(value);
         if (status === 200) {
            localStorage.setItem('phoneNumber', phoneNumber);
            Toasts.toastSuccess('ورود موفقیت آمیز بود');
            navigate('/', { replace: true });
            dispatch(getAllUsers(phoneNumber));
            dispatch(getUserCartHandler(phoneNumber));
         }
      } catch (e) {
         if (e.response.status === 400) {
            Toasts.toastError('نام کاربری یا رمز عبور اشتباه است');
         }
      }
   }
);

export const changePasswordFromPanelHandler = createAsyncThunk(
   'user/changePass',
   async (arg) => {
      try {
         const { data, status } = await changePasswordFromPanel(arg);
         console.log(data);
      } catch (e) {
         if (e.response.status === 500) {
            Toast.toastError('رمز قبلی وارد شده معتبر نمی باشد');
         }
      }
   }
);

export const logoutHandler = createAsyncThunk(
   'user/logout',
   async (navigate) => {
      try {
         localStorage.removeItem('phoneNumber');
         Cookies.remove('sessionid');
         navigate('/');
         window.location.reload();
      } catch (err) {
         if (err.response) {
            Toast.toastError('خروج از حساب کاربری موفقیت آمیز نبود');
         }
      }
   }
);

export const fillProfileHandler = createAsyncThunk(
   'user/fill-profile',
   async (arg, { getState }) => {
      const state = getState();
      const VALIDATION_CODE = process.env.REACT_APP_VALIDATION_CODE;
      const { firstName, lastName, password, grade } = arg.value;
      const { navigate } = arg;
      const { nationalCode } = state.user.userInfo;
      const phoneNumber = localStorage.getItem('phoneNumber');
      const user = {
         firstName,
         lastName,
         password,
         grade,
         phoneNumber,
         nationalCode,
         VALIDATION_CODE,
      };

      try {
         const { status } = await fillProfile(user, phoneNumber);
         if (status === 200) {
            navigate('/');
            window.location.reload();
            Toasts.toastSuccess(' ثبت نام موفقیت آمیز بود ');
            return user;
         }
      } catch (e) {}
   }
);

export const forgotPasswordHandler = createAsyncThunk(
   'user/forgot-password',
   async (arg) => {
      const { navigate, phoneNumber } = arg;
      try {
         const { data, status } = await resendCode(phoneNumber);
         const { code } = data;

         if (status === 201) {
            navigate('/enter-code');
            localStorage.setItem('phoneNumber', phoneNumber);
            const { data, status } = await getAllUserData(phoneNumber);
            if (status === 200) {
               return {
                  data,
                  code,
               };
            }
         }
      } catch (err) {
         if (err.response) {
            return { data: {}, code: '' };
         }
      }
   }
);

export const changePasswordHandler = createAsyncThunk(
   'user/change-password',
   async (arg) => {
      const { phoneNumber, password, navigate } = arg;
      try {
         const { status } = await changePassword(phoneNumber, password);
         if (status === 200) {
            navigate('/');
            Toasts.toastSuccess('رمز عبور با موفقیت تغییر یافت');
         }
      } catch (err) {
         Toast.toastError('مشکلی از سمت سرور رخ داده است.');
      }
   }
);

export const getAllUsers = createAsyncThunk('user/get-user', async (arg) => {
   try {
      const { data, status } = await getAllUserData(arg);
      if (status === 200) {
         return { data };
      }
   } catch (err) {
      if (err.response) {
         return { data: {} };
      }
   }
});

export const getUsualQuestionsHandler = createAsyncThunk(
   'user/get-user-questions',
   async () => {
      try {
         const { data, status } = await getUsualQuestions();
         if (status === 200) {
            return { data };
         }
      } catch (err) {
         if (err.response) {
            return { data: [] };
         }
      }
   }
);

// initial state
const initialState = {
   userInfo: {},
   code: '',
   isCodeValid: false,
   usualQuestions: [],
};

const userReducer = createSlice({
   name: 'user',
   initialState: initialState,
   reducers: {
      checkUseOnceCode: (state, action) => {
         if (action.payload?.values.code === action.payload?.code) {
            state.isCodeValid = true;
         }
      },
   },
   extraReducers: {
      [getCodeAgain.fulfilled]: (state, action) => {
         state.code = action.payload?.code;
      },

      [fillProfileHandler.fulfilled]: (state, action) => {
         Object.assign(state.userInfo, action.meta.arg.value);
         state.isLogedIn = true;
      },
      [registerHandler.fulfilled]: (state, action) => {
         Object.assign(state.userInfo, action.payload?.value);
         state.code = action.payload?.code;
      },
      [forgotPasswordHandler.fulfilled]: (state, action) => {
         const { data, code } = action.payload;
         Object.assign(state.userInfo, data);
         state.code = code;
      },
      [getAllUsers.fulfilled]: (state, action) => {
         Object.assign(state.userInfo, action.payload?.data);
      },
      [getUsualQuestionsHandler.fulfilled]: (state, action) => {
         state.usualQuestions = action.payload?.data;
      },
   },
});

export const { checkUseOnceCode } = userReducer.actions;

export default userReducer.reducer;
