import { configureStore } from '@reduxjs/toolkit';
import userReducer from '../features/userInfo';
import teacherReducer from '../features/teachers';
import coursesReducer from '../features/courses';
import coverReducer from '../features/covers';
import cartReducer from '../features/cart';

export const store = configureStore({
   reducer: {
      userReducer,
      teacherReducer,
      coursesReducer,
      coverReducer,
      cartReducer,
   },
   middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware({
         serializableCheck: false,
      }),
   // middleware: [
   //    // Because we define the middleware property here, we need to explictly add the defaults back in.
   //    ...getDefaultMiddleware(),
   //    otherMiddleware,
   // ],
   // middleware: (getDefaultMiddleware) =>
   //    getDefaultMiddleware({
   //       serializableCheck: {
   //          // Ignore these action types
   //          ignoredActions: ['your/action/type'],
   //          // Ignore these field paths in all actions
   //          ignoredActionPaths: ['meta.arg', 'payload.timestamp'],
   //          // Ignore these paths in the state
   //          ignoredPaths: ['items.dates'],
   //       },
   //    }),
});
