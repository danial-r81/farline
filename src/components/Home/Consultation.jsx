import React from 'react';
import * as Yup from 'yup';
import { Form, Formik } from 'formik';
import { Input } from '../forms/Input';

export const Consultation = () => {
  const InitialValues = {
    name: '',
    phoneNumber: '',
  };

  const validationSchema = Yup.object({
    name: Yup.string().required('پر کردن این فیلد الزامی است'),
    phoneNumber: Yup.string()
      .required('پر کردن این فیلد الزامی است')
      .matches(
        /^(\+98|0098|98|0)?9\d{9}$/g,
        'شماره مبایل وارد شده معتبر نمی باشد'
      ),
  });

  return (
    <div className='consultation-container'>
      <img src='images/cons.png' alt='' />
      <div className='consultation'>
        <h2>دریافت مشاوره</h2>
        <Formik
          initialValues={InitialValues}
          validationSchema={validationSchema}>
          <Form className='consultation-form'>
            <Input
              id='phonenumber'
              type='tel'
              name='phoneNumber'
              placeholder='شماره مبایل'
            />
            <Input
              id='name'
              type='tel'
              name='name'
              placeholder='نام و نام خانوادگی'
            />
            <div className='cons-btn'>
              <button type='submit'>ارسال</button>
            </div>
          </Form>
        </Formik>
      </div>
    </div>
  );
};
