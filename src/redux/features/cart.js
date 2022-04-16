import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import {
   addCourseToCart,
   deleteCourse,
   getCartCount,
   getDiscount,
   getTotalPrice,
   getUserCartItems,
} from '../../services/cartServices';
import { getWeekPlan } from '../../services/userPanelServices';
import Toast from '../../toasts/toasts';

export const addCourseToCartHandler = createAsyncThunk(
   'add-cart',
   async (arg, { dispatch }) => {
      const phoneNumber = localStorage.getItem('phoneNumber');
      try {
         const { data, status } = await addCourseToCart(arg);
         if (status === 201) {
            Toast.toastSuccess('دوره به سبد خرید اضافه شد.');
            dispatch(getCartItemsCountHandler(phoneNumber));
            return { data };
         }
      } catch (e) {
         if (e.response) {
            if (e.response.status === 400) {
               Toast.toastWarning('این دوره در سبد خرید موجود است.');
            }
            if (e.response.status === 404) {
               Toast.toastWarning('ابتدا وارد حساب کاربری خود شوید');
            }
         }
      }
   }
);

export const getCartItemsCountHandler = createAsyncThunk(
   'get-cart-count',
   async (arg) => {
      try {
         const { data, status } = await getCartCount(arg);
         if (status === 200) {
            return Promise.resolve(data);
         }
      } catch (er) {
         console.log(er.response);
      }
   }
);

export const getUserCartHandler = createAsyncThunk(
   'get-user-cart',
   async (arg) => {
      try {
         const { data, status } = await getUserCartItems(arg);
         console.log(data);
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
   async (arg, { dispatch }) => {
      const { phoneNumber, code } = arg;
      try {
         const { data, status } = await deleteCourse(phoneNumber, code);
         if (status === 204) {
            dispatch(getUserCartHandler(phoneNumber)); // get cart items
            dispatch(getCartItemsCountHandler(phoneNumber)); // get cart items counts
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
         if (er.response.status === 404) {
            Toast.toastError('کد تخفیف وارد شده معتبر نمی باشد');
         }
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
      cartItemsCount: '',
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
      [getCartItemsCountHandler.fulfilled]: (state, action) => {
         state.cartItemsCount = action.payload.count;
      },
   },
});

export const { setDisCountCode } = cartReducer.actions;

export default cartReducer.reducer;
