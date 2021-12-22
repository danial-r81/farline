import { configureStore } from '@reduxjs/toolkit';
import thunk from 'redux-thunk';
import userReducer from '../features/userInfo';

export const store = configureStore({
  reducer: {
    userReducer,
  },
  // middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(thunk),
});
