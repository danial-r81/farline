import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { getWeekPlan } from '../../services/userPanelServices';

export const getWeekPlanHandler = createAsyncThunk(
   'get-week-plan',
   async (arg) => {
      try {
         const { data, status } = await getWeekPlan(arg);
         if (status === 200) {
            return { data };
         }
      } catch (er) {}
   }
);

export const getOnlineCoursesHandler = createAsyncThunk(
   'get-online-courses',
   async () => {
      // try {
      //    const {data, status} = await
      // } catch (er) {}
   }
);

const dashbordReducer = createSlice({
   name: 'dashbord-info',
   initialState: {
      weekPlanImgUrl: '',
      onlineCourses: [],
      payments: [],
   },
   extraReducers: {
      [getWeekPlanHandler.fulfilled]: (state, action) => {
         state.weekPlanImgUrl = action.payload.data.picture;
      },
   },
});

export default dashbordReducer.reducer;
