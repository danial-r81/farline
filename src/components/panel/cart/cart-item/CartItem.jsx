import React from 'react';
import { useDispatch } from 'react-redux';
import { deleteCourseHandler } from '../../../../redux/features/cart';
import config from '../../../../services/config.json';
import { BsXCircle } from 'react-icons/bs';

const CartItem = ({ cartItem }) => {
   const dispatch = useDispatch();
   const phoneNumber = localStorage.getItem('phoneNumber');
   const code = cartItem.code;

   return (
      <tr>
         <td>
            <div className='info-table'>
               <div className='table-img'>
                  <img src={`${config.baseUrl}${cartItem.picture}`} alt='' />
               </div>

               <div className='title-shop-cart '>
                  <p>{cartItem.title}</p>
                  <p>مدرس : {cartItem.teacher}</p> <br />
               </div>
            </div>
         </td>
         <td className='trash-shop-contain '>
            {' '}
            <a
               href='# '
               className='trash-shop '
               onClick={() =>
                  dispatch(deleteCourseHandler({ phoneNumber, code }))
               }>
               <BsXCircle />
            </a>{' '}
         </td>
         <td className='shop-price '>{cartItem.price} تومان</td>
      </tr>
   );
};

export default CartItem;
