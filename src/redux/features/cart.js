import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import {
   addCourseToCart,
   deleteCourse,
   getDiscount,
   getTotalPrice,
   getUserCartItems,
} from '../../services/cartServices';
import Toast from '../../toasts/toasts';

export const addCourseToCartHandler = createAsyncThunk(
   'add-cart',
   async (arg) => {
      console.log(arg);
      try {
         const { data, status } = await addCourseToCart(arg);
         if (status === 201) {
            Toast.toastSuccess('دوره به سبد خرید اضافه شد.');
            return { data };
         }
      } catch (e) {
         if (e.response) {
            console.log(e.response);
            if (e.response.status === 400) {
               Toast.toastWarning('این دوره در سبد خرید موجود است.');
            }
         }
      }
   }
);

export const getUserCartHandler = createAsyncThunk(
   'get-user-cart',
   async (arg) => {
      try {
         const { data, status } = await getUserCartItems(arg);
         if (status === 200) {
            return { data };
         }
      } catch (er) {
         console.log(er);
      }
   }
);

export const deleteCourseHandler = createAsyncThunk(
   'delete-course',
   async (arg) => {
      try {
         const { data, status } = await deleteCourse(arg);
         if (status === 204) {
            window.location.reload();
            return { data };
         }
      } catch (er) {
         console.log(er);
      }
   }
);

export const getTotalPriceHandler = createAsyncThunk(
   'get-total-price',
   async (arg) => {
      try {
         const { data, status } = await getTotalPrice(arg);
         if (status === 200) {
            return { data };
         }
      } catch (er) {
         console.log(er);
      }
   }
);

export const getDiscountHandler = createAsyncThunk(
   'get-discount',
   async (arg) => {
      const { phoneNumber, disCountCode } = arg;
      try {
         const { status } = await getDiscount(phoneNumber, disCountCode);
         if (status === 200) {
            window.location.reload();
         }
      } catch (er) {
         console.log(er);
      }
   }
);

const cartReducer = createSlice({
   name: 'cart',
   initialState: {
      cart: [],
      totalPrice: '',
      totalCount: 0,
      disCountCode: '',
      weekPlanImgUrl: '',
   },
   reducers: {
      setDisCountCode: (state, action) => {
         state.disCountCode = action.payload;
      },
   },
   extraReducers: {
      [getUserCartHandler.fulfilled]: (state, action) => {
         state.cart = action.payload.data;
      },
      [getTotalPriceHandler.fulfilled]: (state, action) => {
         state.totalPrice = action.payload.data.total;
         state.totalCount = action.payload.data.count;
      },
      [deleteCourseHandler.fulfilled]: (state, action) => {
         console.log('item deleted');
      },
   },
});

export const { setDisCountCode } = cartReducer.actions;

export default cartReducer.reducer;
