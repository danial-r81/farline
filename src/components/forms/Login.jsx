import { useEffect } from 'react';
import { Form, Formik } from 'formik';
import { NavLink } from 'react-router-dom';
import { Input } from './Input';
import { useNavigate } from 'react-router';
import { useDispatch } from 'react-redux';
import { motion } from 'framer-motion';
import http from '../../services/httpService';
import config from '../../services/config.json';
import { loginHandler } from '../../redux/features/userInfo';
import useForm from '../../hooks/useValidation';

import './form.css';
import FormContainer from './form-container/FormContainer';

const Login = () => {
   const dispatch = useDispatch();
   const history = useNavigate();

   useEffect(() => {
      http
         .get(`${config.baseUrl}/api/csrf/`)
         .then((res) => {
            console.log(res);
         })
         .catch((e) => {
            if (e.response) {
               console.log(e.response);
            } else if (e.message) {
               console.log(e.message);
            } else if (e.request) {
               console.log(e.request);
            }
         });
   }, []);
   const onSubmit = (value) => {
      dispatch(loginHandler(value, history));
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
