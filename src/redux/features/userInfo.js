import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
// import { useHistory } from 'react-router';
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
} from '../../services/userServices';

export const getCodeAgain = createAsyncThunk(
   'users/resend-code',
   async (arg) => {
      try {
         const { data } = await resendCode();
         console.log(data);
         return Promise.resolve(data);
      } catch (err) {
         if (err.response) {
            console.log(err.response);
         }
         if (err.request) {
            console.log(err.request);
         }
         if (err.massage) {
            console.log(err.massage);
         }
      }
   }
);

export const registerHandler = createAsyncThunk(
   'user/register',
   async (arg, { getState }) => {
      const { navigate, value } = arg;
      const { phoneNumber } = value;
      try {
         const { data, status } = await userRegister(value);
         const { code } = data;
         if (status === 201) {
            localStorage.setItem('phoneNumber', phoneNumber);
            console.log(navigate);
            navigate('/get-code');
            return {
               value,
               code,
            };
         }
      } catch (e) {
         if (e.response) {
            if (e.response.status === 400) {
               Toasts.toastWarning('کاربر با این مشخصات موجود است');
            }
            return Promise.reject(e.response);
         }
         if (e.response) {
            console.log(e.response);
         } else if (e.message) {
            console.log(e.message);
         } else if (e.request) {
            console.log(e.request);
         }
      }
   }
);

export const loginHandler = createAsyncThunk('user/login', async (arg) => {
   console.log(arg);
   const { phoneNumber, navigate } = arg;
   try {
      const { status } = await userLogin(arg);
      console.log(status);
      if (status === 200) {
         Toasts.toastSuccess('login was successful');
         localStorage.setItem('phoneNumber', phoneNumber);
         navigate('/');
      }
   } catch (e) {
      console.log(e);
      if (e.response) {
         console.log(e.response);
      } else if (e.message) {
         console.log(e.message);
      } else if (e.request) {
         console.log(e.request);
      }
   }
});

export const changePasswordFromPanelHandler = createAsyncThunk(
   'user/changePass',
   async (arg) => {
      try {
         const response = await changePasswordFromPanel(arg);
         console.log(response);
      } catch (e) {
         if (e.response) {
            console.log(e.response);
         } else if (e.message) {
            console.log(e.message);
         } else if (e.request) {
            console.log(e.request);
         }
      }
   }
);

export const logoutHandler = createAsyncThunk(
   'user/logout',
   async (navigate) => {
      console.log(navigate);
      try {
         const { status } = await logout();
         console.log(status);
         //  if (status === 200) {
         navigate('/');
         window.location.reload();
         localStorage.removeItem('phoneNumber');
         Cookies.remove('sessionid');
         //  }
         return Promise.resolve(navigate);
      } catch (err) {
         if (err.response) {
            console.log(err.response);
         }
         if (err.request) {
            console.log(err.request);
         }
         if (err.massage) {
            console.log(err.massage);
         }
      }
   }
);

export const fillProfileHandler = createAsyncThunk(
   'user/fill-profile',
   async (arg, { getState }) => {
      console.log(arg);
      const state = getState();
      // const danial = ;
      // console.log(danial);
      const { firstName, lastName, password, grade } = arg.value;
      const { navigate } = arg;
      const { nationalCode } = state.userReducer.userInfo;
      const phoneNumber = localStorage.getItem('phoneNumber');
      const user = {
         firstName,
         lastName,
         password,
         grade,
         phoneNumber,
         nationalCode,
         danial: process.env.REACT_APP_VALIDATION_CODE,
      };
      console.log(user);

      try {
         const { status } = await fillProfile(user);
         console.log(status);
         if (status === 200) {
            navigate('/');
            Toasts.toastSuccess(' ثبت نام موفقیت آمیز بود ');
            // window.location.reload();
            return Promise.resolve(user);
         }
      } catch (e) {
         if (e.response) {
            console.log(e.response);
         } else if (e.message) {
            console.log(e.message);
         } else if (e.request) {
            console.log(e.request);
         }
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
         console.log(code);
         console.log(data);

         if (status === 201) {
            navigate('/enter-code');
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
         if (err.request) {
            console.log(err.request);
         }
         if (err.massage) {
            console.log(err.massage);
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
         if (err.response) {
            console.log(err.response);
         }
         if (err.request) {
            console.log(err.request);
         }
         if (err.massage) {
            console.log(err.massage);
         }
      }
   }
);

export const getAllUsers = createAsyncThunk('user/get-user', async () => {
   try {
      const { data, status } = await getAllUserData();
      if (status === 200) {
         console.log('okkk');
         return Promise.resolve(data);
      }
   } catch (err) {
      if (err.response) {
         console.log(err.response);
      }
      if (err.request) {
         console.log(err.request);
      }
      if (err.massage) {
         console.log(err.massage);
      }
   }
});

// initial state
const initialState = {
   userInfo: {},
   code: '',
   isCodeValid: false,
};

const userReducer = createSlice({
   name: 'user',
   initialState: initialState,
   reducers: {
      checkUseOnceCode: (state, action) => {
         console.log(action);
         if (action.payload.values.code === action.payload.code) {
            state.isCodeValid = true;
         }
      },
   },
   extraReducers: {
      [getCodeAgain.fulfilled]: (state, action) => {
         console.log('done!');
         console.log(action);
         state.code = action.payload.code;
      },
      [getCodeAgain.rejected]: (state, action) => {
         console.log('error');
         console.log(action.payload);
      },

      [fillProfileHandler.fulfilled]: (state, action) => {
         Object.assign(state.userInfo, action.meta.arg.value);
         state.isLogedIn = true;
         console.log(action);
         console.log(state.code);
      },
      [fillProfileHandler.rejected]: (state, action) => {
         console.log('error!!!!');
         console.log(action);
      },
      [registerHandler.fulfilled]: (state, action) => {
         // const { navigate } = action.meta.arg;
         console.log(action);
         Object.assign(state.userInfo, action.payload.value);
         state.code = action.payload.code;
         // navigate('/get-code');
      },
      [registerHandler.rejected]: (state, action) => {
         console.log(action.meta.arg.value);
      },
      [forgotPasswordHandler.fulfilled]: (state, action) => {
         console.log(action);
         const { data, code } = action.payload;
         Object.assign(state.userInfo, data);
         state.code = code;
      },
      [forgotPasswordHandler.rejected]: (state, action) => {
         console.log(action.meta);
      },
      [getAllUsers.fulfilled]: (state, action) => {
         console.log(action);
         Object.assign(state.userInfo, action.payload);
      },
      [getAllUsers.rejected]: () => {
         console.log('error');
      },
      [getAllUsers.pending]: () => {
         console.log('pending');
      },
      [logoutHandler.fulfilled]: (state, action) => {
         console.log('logout');
         console.log(action);
         localStorage.removeItem('phoneNumber');
         window.location.href = '/';
      },
      [logoutHandler.rejected]: () => {
         console.log('logout rejucted');
      },
      [logoutHandler.pending]: () => {
         console.log('logout pending');
      },
   },
});

export const { checkUseOnceCode } = userReducer.actions;

export default userReducer.reducer;
