import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { getSelectedCourses } from '../../services/coursesServices';
import { getCoursesKinds } from '../../services/userServices';

export const coursesKinds = createAsyncThunk('get/kinds', async () => {
   try {
      const { data } = await getCoursesKinds();
      return Promise.resolve(data);
   } catch (e) {
      console.log(e);
   }
});

export const getCourses = createAsyncThunk('get/courses', async (arg) => {
   try {
      const { topic, grade, history } = arg;
      const { data, status } = await getSelectedCourses(grade, topic);

      if (status === 200) {
         localStorage.setItem('g', grade);
         localStorage.setItem('t', topic);
         history.push('/all-courses');
         return Promise.resolve(data);
      }
   } catch (e) {
      if (e.response) {
         console.log(e.response);
      } else if (e.message) {
         console.log(e.message);
      } else if (e.request) {
         console.log(e.request);
      }
   }
});

const coursesReducer = createSlice({
   name: 'courses',
   initialState: {
      courses: [],
      showSelectTopic: true,
      grade: 1,
      topic: 1,
   },
   reducers: {
      setShowSelectGrade: (state) => {
         console.log('changed');
         state.showSelectTopic = false;
      },
   },
   extraReducers: {
      [coursesKinds.fulfilled]: (state, action) => {
         state.courses = action.payload;
      },
      [getCourses.fulfilled]: (state, action) => {
         state.courses = action.payload;
      },
   },
});

export const { setShowSelectGrade } = coursesReducer.actions;

export default coursesReducer.reducer;
