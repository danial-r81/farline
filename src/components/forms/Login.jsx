import { useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { useNavigate } from 'react-router';
import { useDispatch } from 'react-redux';
import Input from './Input';
import {
   getCsrfTokenHandler,
   loginHandler,
} from '../../redux/features/userInfo';
import FormContainer from './form-container/FormContainer';

import './form.css';

const Login = () => {
   const dispatch = useDispatch();
   const navigate = useNavigate();

   useEffect(() => {
      dispatch(getCsrfTokenHandler());
   }, []);
   const onSubmit = (value) => {
      dispatch(loginHandler({ value, navigate }));
   };

   return (
      <FormContainer
         action='login'
         initialValues={{ phoneNumber: '', password: '' }}
         onSubmit={onSubmit}
         title='ورود'>
         <Input
            id='phonenumber'
            type='tel'
            name='phoneNumber'
            placeholder='شماره موبایل'
         />
         <Input
            id='password'
            type='password'
            name='password'
            placeholder='رمز عبور'
         />
         <div className='btns'>
            <button className='submit' type='submit'>
               ورود
            </button>
            <NavLink className='register' to='/register'>
               ثبت نام
            </NavLink>
            <NavLink to='/forget-password' className='forget-code'>
               رمز خود را فراموش کرده اید؟
            </NavLink>
         </div>
      </FormContainer>
   );
};

export default Login;
