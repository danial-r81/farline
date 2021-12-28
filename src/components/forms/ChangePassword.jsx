import { Form, Formik } from 'formik';
import { motion } from 'framer-motion';
import React from 'react';
import { useDispatch } from 'react-redux';
import { withRouter } from 'react-router';
import * as Yup from 'yup';
import { changePasswordHandler } from '../../redux/features/userInfo';
import { Input } from './Input';

const ChangePassword = ({ history }) => {
  const phoneNumber = localStorage.getItem('phoneNumber');
  console.log(phoneNumber);
  const dispatch = useDispatch();
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

  const initialValues = {
    password: '',
    confirmPassword: '',
  };

  const validationSchema = Yup.object({
    password: Yup.string()
      .required('پرکردن این فیلد الزامی است')
      .min(8, 'گذرواژه نمی تواند کمتر از 8 کارکتر باشد'),
    confirmPassword: Yup.string()
      .required('پرکردن این فیلد الزامی است')
      .oneOf([Yup.ref('password'), ''], 'پسوورد ها با هم برابر نیستند'),
  });

  const onSubmit = (values) => {
    const { password } = values;
    dispatch(changePasswordHandler({ phoneNumber, password, history }));
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
          animate='visible'
          exit='exit'>
          <h1 className='header'>تغییر رمز عبور</h1>
          <Input
            // id='password'
            type='password'
            name='password'
            placeholder='رمز عبور جدید'
          />
          <Input
            // id='password'
            type='password'
            name='confirmPassword'
            placeholder='تکرار رمز عبور جدید'
          />
          <button className='submit change-password' type='submit'>
            تغییر رمز عبور
          </button>
        </motion.div>
      </Form>
    </Formik>
  );
};

export default withRouter(ChangePassword);
