import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { getTeachers } from '../../services/userServices';

export const teachersInfo = createAsyncThunk('teacher-info', async () => {
   try {
      const { data } = await getTeachers();
      return data;
   } catch (e) {
      console.log(e);
   }
});

const teacherReducer = createSlice({
   name: 'teachers',
   initialState: {
      teachers: [],
   },
   extraReducers: {
      [teachersInfo.fulfilled]: (state, action) => {
         state.teachers = action.payload;
      },
   },
});

export default teacherReducer.reducer;
