import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { getCovers } from '../../services/userServices';

export const getHomePageCovers = createAsyncThunk('covers', async () => {
   try {
      const { data, status } = await getCovers();
      if (status === 200) {
         return { data };
      }
   } catch (er) {
      if (er.response) {
         return { data: [] };
      }
   }
});

const coverReducer = createSlice({
   name: 'cover',
   initialState: {
      covers: [],
   },
   extraReducers: {
      [getHomePageCovers.fulfilled]: (state, action) => {
         state.covers = action.payload.data;
      },
   },
});

export default coverReducer.reducer;
