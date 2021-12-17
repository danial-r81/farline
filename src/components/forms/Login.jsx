import { Form, Formik } from 'formik';
import { NavLink } from 'react-router-dom';
import { Input } from './Input';
import { withRouter } from 'react-router';
import * as Yup from 'yup';
import { initialValuesForLogin } from '../../redux/actions/userInfo';

import './form.css';
import { useDispatch } from 'react-redux';
import { motion } from 'framer-motion';

const Login = ({ history }) => {
  const dispatch = useDispatch();

  const initialValues = { phoneNumber: '', password: '' };
  const validationSchema = Yup.object({
    phoneNumber: Yup.string()
      .required('پر کردن این فیلد الزامی است')
      .matches(
        /^(\+98|0098|98|0)?9\d{9}$/g,
        'شماره مبایل وارد شده معتبر نمی باشد'
      ),
    password: Yup.string()
      .required('پر کردن این فیلد الزامی است ')
      .min(8, 'گذرواژه نمی تواند کمتر از 8 کارکتر باشد'),
  });

  const onSubmit = (value) => {
    console.log(value);
    dispatch(initialValuesForLogin(value));
  };

  const FormVariant = {
    hidden: {
      y: '-50vh',
      opacity: 0,
    },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        delay: 0.3,
        duration: 1,
        type: 'spring',
        stiffness: 100,
      },
    },
    exit: {
      y: 100,
      opacity: 0.7,
      transition: {
        ease: 'easeInOut',
        delay: 5,
      },
    },
  };

  console.log(history);

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
          animate='visible'
          exit='exit'>
          <h1 className='header'>ورود</h1>
          <Input
            id='phonenumber'
            type='tel'
            name='phoneNumber'
            placeholder='شماره مبایل'
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
