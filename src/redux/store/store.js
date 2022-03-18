import { configureStore } from '@reduxjs/toolkit';
import userReducer from '../features/userInfo';
import teacherReducer from '../features/teachers';
import coursesReducer from '../features/courses';
import coverReducer from '../features/covers';
import cartReducer from '../features/cart';
import userPanelReducer from '../features/userPanel';

export const store = configureStore({
   reducer: {
      user: userReducer,
      teacher: teacherReducer,
      courses: coursesReducer,
      cover: coverReducer,
      cart: cartReducer,
      panel: userPanelReducer,
   },
});
