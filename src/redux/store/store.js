import { configureStore } from '@reduxjs/toolkit';
import userReducer from '../features/userInfo';
import teacherReducer from '../features/teachers';
import coursesReducer from '../features/courses';

export const store = configureStore({
  reducer: {
    userReducer,
    teacherReducer,
    coursesReducer,
  },
});
