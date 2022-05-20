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
   logout,
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
      console.log(err.response);
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
      } catch (er) {
         console.log(er.response);
      }
   }
);

export const loginHandler = createAsyncThunk(
   'user/login',
   async (arg, { dispatch }) => {
      console.log(arg);
      const { value, navigate } = arg;
      const { phoneNumber } = value;
      try {
         const { status } = await userLogin(value);
         if (status === 200) {
            console.log('login');
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
      } catch (e) {
         console.log(e.response);
      }
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
            console.log(err.response);
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
         console.log(err.response);
      }
   }
);

export const getAllUsers = createAsyncThunk('user/get-user', async (arg) => {
   try {
      const { data, status } = await getAllUserData(arg);
      if (status === 200) {
         return Promise.resolve(data);
      }
   } catch (err) {
      if (err.response) {
         console.log(err.response);
      }
   }
});

export const getUsualQuestionsHandler = createAsyncThunk(
   'user/get-user-questions',
   async () => {
      try {
         const { data, status } = await getUsualQuestions();
         if (status === 200) {
            return Promise.resolve(data);
         }
      } catch (err) {
         console.log(err.response);
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
         if (action.payload.values.code === action.payload.code) {
            state.isCodeValid = true;
         }
      },
   },
   extraReducers: {
      [getCodeAgain.fulfilled]: (state, action) => {
         console.log(action.payload);
         state.code = action.payload.code;
      },

      [fillProfileHandler.fulfilled]: (state, action) => {
         Object.assign(state.userInfo, action.meta.arg.value);
         state.isLogedIn = true;
      },
      [registerHandler.fulfilled]: (state, action) => {
         Object.assign(state.userInfo, action.payload.value);
         state.code = action.payload.code;
      },
      [forgotPasswordHandler.fulfilled]: (state, action) => {
         const { data, code } = action.payload;
         Object.assign(state.userInfo, data);
         state.code = code;
      },
      [getAllUsers.fulfilled]: (state, action) => {
         Object.assign(state.userInfo, action.payload);
      },
      [getUsualQuestionsHandler.fulfilled]: (state, action) => {
         state.usualQuestions = action.payload;
      },
      // [logoutHandler.fulfilled]: (state, action) => {
      //    localStorage.removeItem('phoneNumber');
      //    console.log(action);
      //    const navigate
      // },
   },
});

export const { checkUseOnceCode } = userReducer.actions;

export default userReducer.reducer;
