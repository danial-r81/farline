import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import {
   getOnlineCourses,
   getPaid,
   getWeekPlan,
} from '../../services/userPanelServices';

export const getWeekPlansHandler = createAsyncThunk(
   'get-week-plan',
   async (arg) => {
      const { phoneNumber, navigate } = arg;
      try {
         const { data, status } = await getWeekPlan(phoneNumber);
         console.log(data);
         if (status === 200) {
            navigate('/profile/week-plan');
            return { data };
         }
      } catch (er) {
         console.log(er.response);
      }
   }
);

export const getWeekPlanAfterRfresh = createAsyncThunk(
   'get-week-plan-ar',
   async (arg) => {
      try {
         const { data, status } = await getWeekPlan(arg);
         if (status === 200) return { data };
      } catch (er) {
         console.log(er.response);
      }
   }
);

export const getOnlineClassesHandler = createAsyncThunk(
   'get-online-classes',
   async () => {
      try {
         const { data, status } = await getOnlineCourses();
         if (status === 200) {
            return { data };
         }
      } catch (er) {
         console.log(er.response);
      }
   }
);

export const paymentHandler = createAsyncThunk('get-paid', async (arg) => {
   try {
      const { data, status } = await getPaid(arg);
      if (status) {
         return { data };
      }
   } catch (er) {
      console.log(er.response);
   }
});

const userPanelReducer = createSlice({
   name: 'dashbord-info',
   initialState: {
      weekPlanImages: [],
      onlineClasses: [],
      paymentUrl: '',
   },
   extraReducers: {
      [getWeekPlansHandler.fulfilled]: (state, action) => {
         state.weekPlanImages = action.payload.data;
      },
      [getWeekPlanAfterRfresh.fulfilled]: (state, action) => {
         state.weekPlanImages = action.payload.data;
      },
      [getOnlineClassesHandler.fulfilled]: (state, action) => {
         state.onlineClasses = action.payload.data;
      },
      [paymentHandler.fulfilled]: (state, action) => {
         state.paymentUrl = action.payload.data;
      },
   },
});

export default userPanelReducer.reducer;
