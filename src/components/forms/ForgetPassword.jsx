import Input from './Input';
import { useDispatch } from 'react-redux';
import { forgotPasswordHandler } from '../../redux/features/userInfo';
import { useNavigate } from 'react-router';
import FormContainer from './form-container/FormContainer';

import './form.css';
const ForgetPassword = () => {
   const dispatch = useDispatch();
   const navigate = useNavigate();

   const onSubmit = (values) => {
      const { phoneNumber } = values;
      dispatch(forgotPasswordHandler({ phoneNumber, navigate }));
   };

   return (
      <FormContainer
         action='forget-password'
         initialValues={{ phoneNumber: '' }}
         onSubmit={onSubmit}
         title='لطفا شماره موبایل خود را وارد کنید'>
         <Input
            id='phonenumber'
            type='tel'
            name='phoneNumber'
            placeholder='شماره مبایل'
         />
         <button className='submit' type='submit'>
            دریافت کد
         </button>
      </FormContainer>
   );
};

export default ForgetPassword;
