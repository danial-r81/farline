import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { getCovers } from '../../services/userServices';

export const getHomePageCovers = createAsyncThunk('covers', async () => {
   try {
      const { data, status } = await getCovers();
      if (status === 200) {
         console.log(data);
         return Promise.resolve(data);
      }
   } catch (e) {
      console.log(e);
   }
});

const coverReducer = createSlice({
   name: 'cover',
   initialState: {
      covers: [],
   },
   extraReducers: {
      [getHomePageCovers.fulfilled]: (state, action) => {
         console.log(action);
         state.covers = action.payload;
      },
      [getHomePageCovers.rejected]: (state, action) => {
         console.log('pending');
         console.log(action);
         // state.covers = action.payload;
      },
      [getHomePageCovers.pending]: (state, action) => {
         console.log('rejected');
         console.log(action);
         state.covers = action.payload;
      },
   },
});

export default coverReducer.reducer;
