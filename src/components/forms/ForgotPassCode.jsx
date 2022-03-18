import { motion } from 'framer-motion';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router';
import { getCodeAgain } from '../../redux/features/userInfo';
import Toast from '../../toasts/toasts';
import FormVariant from './form-variants/formVariants';

const ForgotPassCode = () => {
   const dispatch = useDispatch();
   const phoneNumber = localStorage.getItem('phoneNumber');
   const navigate = useNavigate();

   const code = useSelector((state) => state.user.code);

   const goToChangePassword = () => {
      const input = document.querySelector('.input-code').value;

      if (input === code) {
         navigate('/change-password');
      } else {
         Toast.toastError('کد وارد شده صحیح نمی بشد');
      }
   };

   return (
      <motion.div
         className='form'
         variants={FormVariant}
         initial='hidden'
         animate='visible'
         exit='exit'>
         <div className='form-container'>
            <div className='get-code-text'>
               کد ارسال شده به شماره {phoneNumber} را وارد کنید{' '}
            </div>
            <input className='input-code' type='text' />
            <button
               className='submit'
               type='submit'
               onClick={goToChangePassword}>
               تایید
            </button>
            <div className='resend'>
               <p className='resend-code-text'>
                  کد فعال سازی را دریافت نکرده اید؟
               </p>
               <button
                  className='resend-code-btn'
                  onClick={() => dispatch(getCodeAgain(phoneNumber))}>
                  <div className='resend-text'>ارسال مجدد</div>
                  <span class='lnr lnr-undo'></span>
               </button>
            </div>
         </div>
      </motion.div>
   );
};

export default ForgotPassCode;
