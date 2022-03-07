import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { getCoursesPackages } from '../../services/coursesServices';

export const getCoursesPackageHandler = createAsyncThunk(
   'getcourses',
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

const coursesReducer = createSlice({
   name: 'courses',
   initialState: {
      coursePackages: [],
   },
   extraReducers: {
      [getCoursesPackageHandler.fulfilled]: (state, action) => {
         state.coursePackages = action.payload.data;
      },
   },
});

export const { setShowSelectGrade } = coursesReducer.actions;

export default coursesReducer.reducer;
