import React from 'react';
import * as Yup from 'yup';
import { Form, Formik } from 'formik';
import { Input } from '../../forms/Input';
import http from '../../../services/httpService';
import config from '../../../services/config.json';

export const Consultation = () => {
  const InitialValues = {
    name: '',
    phone: '',
  };

  const validationSchema = Yup.object({
    name: Yup.string().required('پر کردن این فیلد الزامی است'),
    phone: Yup.string()
      .required('پر کردن این فیلد الزامی است')
      .matches(
        /^(\+98|0098|98|0)?9\d{9}$/g,
        'شماره مبایل وارد شده معتبر نمی باشد'
      ),
  });

  const onSubmit = (value) => {
    http
      .post(`${config.baseUrl}/api/giude/`, JSON.stringify(value))
      .then((res) => console.log(res))
      .catch((e) => console.log(e));
  };

  return (
    <div className='consultation-container'>
      <img src='images/cons.png' alt='' />
      <div className='consultation'>
        <h2>دریافت مشاوره</h2>
        <Formik
          initialValues={InitialValues}
          validationSchema={validationSchema}
          onSubmit={onSubmit}>
          <Form className='consultation-form'>
            <Input
              id='phonenumber'
              type='tel'
              name='phone'
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
