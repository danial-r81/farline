import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { getTeachers } from '../../services/userServices';

export const getTeachersHandler = createAsyncThunk('teacher-info', async () => {
   try {
      const { data, status } = await getTeachers();
      if (status) {
         return { data };
      }
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
      [getTeachersHandler.fulfilled]: (state, action) => {
         state.teachers = action.payload.data;
      },
   },
});

export default teacherReducer.reducer;
