import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import {
   getFinancialServices,
   getOnlineCourses,
   getPaid,
   getTimeLeftToKonkur,
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
   async (arg) => {
      try {
         // const { phoneNumber, navigate } = arg;
         const { data, status } = await getOnlineCourses(arg);
         if (status === 200) {
            console.log(data);
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

export const getFinancialServicesHandler = createAsyncThunk(
   'get-financial-services',
   async (arg) => {
      try {
         const { data, status } = await getFinancialServices(arg);
         if (status === 200) return { data };
      } catch (er) {
         console.log(er.response);
      }
   }
);

export const getTimeLeftToKonkurHandler = createAsyncThunk(
   'get-timeLeft-to-konkur',
   async () => {
      try {
         const { data, status } = await getTimeLeftToKonkur();
         if (status === 200) {
            const { today, week, day } = data;
            return {
               today,
               week,
               day,
            };
         }
      } catch (er) {
         console.log(er.response);
      }
   }
);

const userPanelReducer = createSlice({
   name: 'dashbord-info',
   initialState: {
      weekPlanImages: [],
      onlineClasses: [],
      financialServices: [],
      konkurTimer: {
         today: '7 اردیبهشت 1401',
         day: '224',
         week: '46',
      },
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
      [getFinancialServicesHandler.fulfilled]: (state, action) => {
         state.financialServices = action.payload.data;
      },
      [getTimeLeftToKonkurHandler.fulfilled]: (state, action) => {
         state.konkurTimer.today = action.payload.today;
         state.konkurTimer.day = action.payload.day;
         state.konkurTimer.week = action.payload.week;
      },
      [getTimeLeftToKonkurHandler.rejected]: (state, action) => {
         console.log(action);
      },
   },
});

export default userPanelReducer.reducer;
