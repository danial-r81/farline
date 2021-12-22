import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { resendCode } from '../../services/userServices';

export const getData = createAsyncThunk('users/resend-code', async (arg) => {
  try {
    const response = await resendCode(arg);
    return response;
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

const initialState = {
  userInfo: {},
  code: '',
  isLogedIn: false,
  phoneNumber: '',
};

const userReducer = createSlice({
  name: 'user',
  initialState: initialState,
  reducers: {
    userRegisterHandler: (state, action) => {
      Object.assign(state.userInfo, action.payload.value);
      state.code = action.payload.code;
      state.phoneNumber = action.payload.value.phoneNumber;
    },
    completePrfileHandler: (state, action) => {
      Object.assign(state.userInfo, action.payload.value);
      state.isLogedIn = true;
    },
  },
  extraReducers: {
    [getData.fulfilled]: (state, action) => {
      console.log('done!');
      console.log(action.payload);
      state.code = action.payload.data.code;
    },
    [getData.rejected]: (state, action) => {
      console.log('error');
      console.log(action.payload);
    },
  },
});

export const { userRegisterHandler, completePrfileHandler } =
  userReducer.actions;

export default userReducer.reducer;
