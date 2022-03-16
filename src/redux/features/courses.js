import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import {
   getCoursesPackages,
   getCoursPack,
   getCourseItems,
   getCourse,
   getCourseSessions,
} from '../../services/coursesServices';

export const getCoursesPackageHandler = createAsyncThunk(
   'get-packages',
   async () => {
      try {
         const { data, status } = await getCoursesPackages();
         console.log(data);
         if (status === 200) {
            return { data };
         }
      } catch (er) {
         console.log(er);
      }
   }
);

export const getCoursePackHandler = createAsyncThunk(
   'get-package-item',
   async (arg) => {
      const { navigate, item } = arg;
      try {
         const { data, status } = await getCoursPack(item.code);
         console.log(data);
         if (status === 200) {
            localStorage.setItem('course_id', item.code);
            navigate(`/courses/${item.path}`);
            return data;
         }
      } catch (er) {
         console.log(er);
      }
   }
);

export const getCoursePackAfterRefresh = createAsyncThunk(
   'get-package-items-ar',
   async (arg, { dispatch }) => {
      console.log(arg);
      try {
         const { data, status } = await getCoursPack(arg);
         const firstItemOfData = data[0].code;
         if (status === 200) {
            dispatch(getCoursesItemsHandler(firstItemOfData));
            console.log('data', data);
            return { data };
         }
      } catch (er) {
         console.log(er);
      }
   }
);

export const getCoursesItemsHandler = createAsyncThunk(
   'get-courses-items',
   async (arg) => {
      console.log(arg);
      try {
         const { data, status } = await getCourseItems(arg);
         console.log(data);
         if (status === 200) {
            console.log('done');
            return data;
         }
      } catch (er) {
         console.log(er);
      }
   }
);

export const getCourseHandler = createAsyncThunk('get-course', async (arg) => {
   const { code, navigate } = arg;
   try {
      const { data, status } = await getCourse(code);
      if (status === 200) {
         console.log(status);
         console.log(data);
         localStorage.setItem('course_code', code);
         navigate(`/courses/${data.path}`);
         return { data };
      }
   } catch (er) {
      console.log(er);
   }
});

export const getCourseAfterRefresh = createAsyncThunk(
   'get-course-ar',
   async (arg) => {
      try {
         const { data, status } = await getCourse(arg);
         if (status === 200) {
            return { data };
         }
      } catch (er) {
         console.log(er);
      }
   }
);

export const getCourseSessionsHandler = createAsyncThunk(
   'get-sessions',
   async (arg) => {
      try {
         const { data, status } = await getCourseSessions(arg);
         if (status === 200) {
            console.log(data);
            return { data };
         }
      } catch (er) {
         console.log(er);
      }
   }
);

const coursesReducer = createSlice({
   name: 'courses',
   initialState: {
      coursePackages: [],
      coursePackageItems: [],
      coursesItems: [],
      courseSessions: [],
      course: {},
      packageTitle: '',
      firstButtonClassName: '',
      loading: false,
   },
   extraReducers: {
      [getCoursesPackageHandler.fulfilled]: (state, action) => {
         state.coursePackages = action.payload.data;
      },
      [getCoursePackHandler.fulfilled]: (state, action) => {
         console.log(action.payload);
         state.coursePackageItems = action.payload;
      },
      [getCoursePackAfterRefresh.fulfilled]: (state, action) => {
         state.coursePackageItems = action.payload.data;
         state.packageTitle = action.payload.data[0].package_title;
         state.firstButtonClassName = 'active';
         console.log(state.coursePackageItems);
         console.log('doe');
      },
      [getCoursesItemsHandler.pending]: (state, action) => {
         state.loading = true;
      },
      [getCoursesItemsHandler.fulfilled]: (state, action) => {
         state.coursesItems = action.payload;
         state.loading = false;
      },
      [getCourseHandler.fulfilled]: (state, action) => {
         state.course = action.payload.data;
      },
      [getCourseAfterRefresh.fulfilled]: (state, action) => {
         state.course = action.payload.data;
      },
      [getCourseSessionsHandler.fulfilled]: (state, action) => {
         state.courseSessions = action.payload.data;
      },
   },
});

export default coursesReducer.reducer;
