import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { getCoursesKinds } from '../../services/userServices';

export const coursesKinds = createAsyncThunk('get/courses', async () => {
  try {
    const { data } = await getCoursesKinds();
    return Promise.resolve(data);
  } catch (e) {
    console.log(e);
  }
});

const coursesReducer = createSlice({
  name: 'courses',
  initialState: {
    courses: [],
  },
  extraReducers: {
    [coursesKinds.fulfilled]: (state, action) => {
      state.courses = action.payload;
    },
  },
});

export default coursesReducer.reducer;
