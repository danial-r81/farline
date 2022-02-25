import { courseImg, trashLogo } from '../../../assets';
import './cart.css';

const Cart = () => {
   return (
      <div className='table-container'>
         <table>
            <tr className='title-table'>
               <th>دوره های انتخاب شده</th>
               <th>حذف دوره</th>
               <th>قیمت دوره</th>
            </tr>
            <tr>
               <td>
                  <div className='info-table'>
                     <div className='table-img'>
                        <img src={courseImg} alt='' />
                     </div>

                     <div className='title-shop-cart '>
                        <p>دوره درسی مورد نظر</p>
                        <p>مدرس : استاد افشاری</p> <br />
                     </div>
                  </div>
               </td>
               <td className='trash-shop-contain '>
                  {' '}
                  <a href='# ' className='trash-shop '>
                     {/* <img src={trashLogo} alt='' /> */}
                     {/* <i className='fa fa-trash-o'></i> */}
                     <i class='bi bi-trash'></i>
                  </a>{' '}
               </td>
               <td className='shop-price '>300 تومان</td>
            </tr>
         </table>
         <div className='total-price '>
            <table>
               <tr>
                  <td>تعداد محصول</td>
                  <td>2</td>
               </tr>
               <tr>
                  <td>مبلغ کل</td>
                  <td>800 تومان</td>
               </tr>
            </table>
            <div className='discount-code'>
               <input type='text' placeholder='کد تخفیف خود را وارد کنید' />
               <button type='submit'>اعمال</button>
            </div>
            <div className='checkout'>
               <button className='checkout-btn'>پرداخت</button>
            </div>
         </div>
      </div>
   );
};

export default Cart;
