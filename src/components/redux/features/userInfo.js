import { createSlice } from '@reduxjs/toolkit';
import http from '../../../services/httpService';

const userReducer = createSlice({
  name: 'userInfo',
  initialState: {
    userInfo: {},
    isLogedIn: false,
  },
  reducers: {
    userRegister: (state, action) => {
      Object.assign(state.userInfo, action.payload.value);
    },
  },
});
