import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { getDiscountHandler } from '../../../../redux/features/cart';
import CartItem from '../cart-item/CartItem';

const CartContainer = () => {
   const dispatch = useDispatch();
   const { cart, totalPrice, totalCount } = useSelector((state) => state.cart);
   const [disCountCode, setDisCountCode] = useState(null);
   const phoneNumber = localStorage.getItem('phoneNumber');
   return (
      <>
         <table>
            <tr className='title-table'>
               <th>دوره های انتخاب شده</th>
               <th>حذف دوره</th>
               <th>قیمت دوره</th>
            </tr>
            {cart.map((cartItem, index) => (
               <CartItem key={index} cartItem={cartItem} />
            ))}
         </table>
         <div className='total-price '>
            <table>
               <tr>
                  <td>تعداد محصول</td>
                  <td>{totalCount}</td>
               </tr>
               <tr>
                  <td>مبلغ کل</td>
                  <td> {totalPrice} تومان</td>
               </tr>
            </table>
            <div className='discount-code'>
               <input
                  className='discount-input'
                  type='text'
                  value={disCountCode}
                  placeholder='کد تخفیف خود را وارد کنید'
                  onChange={(e) => setDisCountCode(e.target.value)}
               />
               <button
                  type='submit'
                  onClick={() =>
                     dispatch(getDiscountHandler({ phoneNumber, disCountCode }))
                  }>
                  اعمال
               </button>
            </div>
            <div className='checkout'>
               <button className='checkout-btn'>پرداخت</button>
            </div>
         </div>
      </>
   );
};

export default CartContainer;
