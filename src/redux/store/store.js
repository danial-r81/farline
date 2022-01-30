import { configureStore } from '@reduxjs/toolkit';
import userReducer from '../features/userInfo';
import teacherReducer from '../features/teachers';

export const store = configureStore({
  reducer: {
    userReducer,
    teacherReducer,
  },
});
