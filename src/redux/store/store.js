import { configureStore } from '@reduxjs/toolkit';
import userReducer from '../features/userInfo';
import teacherReducer from '../features/teachers';
import coursesReducer from '../features/courses';
import coverReducer from '../features/covers';

export const store = configureStore({
   reducer: {
      userReducer,
      teacherReducer,
      coursesReducer,
      coverReducer,
   },
   middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware({
         serializableCheck: {
            // Ignore these action types
            ignoredActions: ['your/action/type'],
            // Ignore these field paths in all actions
            ignoredActionPaths: ['meta.arg', 'payload.timestamp'],
            // Ignore these paths in the state
            ignoredPaths: ['items.dates'],
         },
      }),
});
