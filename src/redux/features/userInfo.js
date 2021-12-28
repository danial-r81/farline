import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { toast } from 'react-toastify';
import {
  resendCode,
  userRegister,
  fillProfile,
  getAllUserData,
  changePassword,
} from '../../services/userServices';

export const getCodeAgain = createAsyncThunk(
  'users/resend-code',
  async (arg) => {
    try {
      const { data } = await resendCode(arg);
      return data;
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
    const { history, value } = arg;
    const { phoneNumber } = value;
    const state = getState();
    try {
      const { data, status } = await userRegister(value);
      const { code } = data;
      if (status === 201) {
        localStorage.setItem('phoneNumber', phoneNumber);
        history.push('/get-code');
        return {
          value,
          code,
        };
      }
    } catch (e) {
      if (e.response) {
        if (e.response.status === 400) {
          toast.warn('کاربر با این مشخصات موجود است', {
            position: 'top-right',
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
          });
        }
        return Promise.reject(e.response);
      }
    }
  }
);

export const fillProfileHandler = createAsyncThunk(
  'user/fill-profile',
  async (arg, { getState }) => {
    const state = getState();
    const danial = 'fdgfdhj67867sdfsf2343nh';
    const { history } = arg;
    const { firstName, lastName, password, grade } = arg.value;
    const { phoneNumber, nationalCode } = state.userReducer.userInfo;
    const user = {
      firstName,
      lastName,
      password,
      grade,
      phoneNumber,
      nationalCode,
      danial,
    };

    try {
      const { status } = await fillProfile(user, phoneNumber);
      if (status === 200) {
        history.push('/');
        toast.success(' ثبت نام موفقیت آمیز بود ', {
          position: 'top-right',
          closeOnClick: true,
        });
        return {
          user,
        };
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
  async (arg, { getState }) => {
    const state = getState();
    const { history, phoneNumber } = arg;
    try {
      const { data, status } = await resendCode(phoneNumber);
      const { code } = data;

      if (status === 201) {
        history.push('/enter-code');
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
    const { phoneNumber, password, history } = arg;
    try {
      const { status } = await changePassword(phoneNumber, password);
      if (status === 200) {
        history.push('/');
        toast.success('رمز عبور با موفقیت تغییر یافت', {
          position: 'top-right',
          closeOnClick: true,
        });
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
    const phoneNumber = localStorage.getItem('phoneNumber');
    const { data, status } = await getAllUserData(phoneNumber);
    if (status === 200) {
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
  isLogedIn: false,
  phoneNumber: '',
};

const userReducer = createSlice({
  name: 'user',
  initialState: initialState,
  extraReducers: {
    [getCodeAgain.fulfilled]: (state, action) => {
      console.log('done!');
      console.log(action.payload);
      state.code = action.payload.code;
    },
    [getCodeAgain.rejected]: (state, action) => {
      console.log('error');
      console.log(action.payload);
    },

    [fillProfileHandler.fulfilled]: (state, action) => {
      Object.assign(state.userInfo, action.payload.user);
      state.isLogedIn = true;
      console.log(action.payload);
      console.log(state.code);
    },
    [registerHandler.fulfilled]: (state, action) => {
      Object.assign(state.userInfo, action.payload.value);
      state.code = action.payload.code;
      state.phoneNumber = action.payload.value.phoneNumber;
    },
    [registerHandler.rejected]: (state, action) => {
      console.log(action.payload);
    },
    [forgotPasswordHandler.fulfilled]: (state, action) => {
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
  },
});

export const { userRegisterHandler, completePrfileHandler } =
  userReducer.actions;

export default userReducer.reducer;
