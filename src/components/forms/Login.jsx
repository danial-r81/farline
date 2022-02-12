import { useEffect } from 'react';
import { Form, Formik } from 'formik';
import { NavLink } from 'react-router-dom';
import { Input } from './Input';
import { withRouter } from 'react-router';
import * as Yup from 'yup';
import { useDispatch } from 'react-redux';
import { motion } from 'framer-motion';
import http from '../../services/httpService';
import config from '../../services/config.json';
import { loginHandler } from '../../redux/features/userInfo';
import FormVariant from './form-variants/formVariants';
import useForm from '../../hooks/useValidation';

import './form.css';

const Login = ({ history }) => {
  const dispatch = useDispatch();

  const initialValues = { phoneNumber: '', password: '' };

  const validationSchema = useForm('login');

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
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={onSubmit}>
      <Form className='form'>
        <motion.div
          className='form-container'
          variants={FormVariant}
          initial='hidden'
          animate='visible'>
          <h1 className='header'>ورود</h1>
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
        </motion.div>
      </Form>
    </Formik>
  );
};

export default withRouter(Login);
