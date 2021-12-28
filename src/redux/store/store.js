import { configureStore } from '@reduxjs/toolkit';
import userReducer from '../features/userInfo';

export const store = configureStore({
  reducer: {
    userReducer,
  },
});
