import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router';
import { getCodeAgain } from '../../redux/features/userInfo';
import FormContainer from './form-container/FormContainer';
import Input from './Input';

const GetCode = () => {
   const dispatch = useDispatch();
   const navigate = useNavigate();
   const { code } = useSelector((state) => state.user);
   const phoneNumber = localStorage.getItem('phoneNumber');

   const onSubmit = (values) => {
      if (values.code === code) navigate('/fill-profile');
   };

   return (
      <FormContainer
         initialValues={{ code: '' }}
         action='get-code'
         title='دریافت رمز یکبار مصرف'
         onSubmit={onSubmit}>
         <div className='get-code-text'>
            کد ارسال شده به شماره {phoneNumber} را وارد کنید{' '}
         </div>
         <Input
            name='code'
            type='text'
            placeholder='کد یکبار مصرف را وارد کنید'
         />
         <button className='submit' type='submit'>
            ثبت نام
         </button>
         <div className='resend'>
            <p className='resend-code-text'>
               کد فعال سازی را دریافت نکرده اید؟
            </p>
            <button
               className='resend-code-btn'
               onClick={() => dispatch(getCodeAgain())}>
               <div className='resend-text'>ارسال مجدد</div>
               <span class='lnr lnr-undo'></span>
            </button>
         </div>
      </FormContainer>
   );
};

export default GetCode;
