import { createSlice } from '@reduxjs/toolkit';
// import http from '../../../services/httpService';

const userReducer = createSlice({
  name: 'userInfo',
  initialState: {
    userInfo: {},
    code: '',
    isLogedIn: false,
  },
  reducers: {
    userRegisterHandler: (state, action) => {
      Object.assign(state.userInfo, action.payload.value);
      state.code = action.payload.code;
    },
    completePrfileHandler: (state, action) => {
      Object.assign(state.userInfo, action.payload.value);
      state.isLogedIn = true;
    },
  },
});

export const { userRegisterHandler, completePrfileHandler } =
  userReducer.actions;

export default userReducer.reducer;
