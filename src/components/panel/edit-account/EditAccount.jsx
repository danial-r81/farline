import { Formik, Form } from 'formik';
import React from 'react';
import { useDispatch } from 'react-redux';
import { changePasswordFromPanelHandler } from '../../../redux/features/userInfo';
import * as Yup from 'yup';

export const EditAccount = () => {
  const dispatch = useDispatch();

  const initialValues = {
    password: '',
    newPassword: '',
    confirmNewPassword: '',
  };
  const validationSchema = Yup.object({
    password: Yup.string().required('پر کردن این فیلد الزامی است'),
    newPassword: Yup.string()
      .required('پرکردن این فیلد الزامی است')
      .min(8, 'گذرواژه نمی تواند کمتر از 8 کارکتر باشد'),
    confirmNewPassword: Yup.string()
      .required('پرکردن این فیلد الزامی است')
      .oneOf([Yup.ref('newPassword'), ''], 'پسوورد ها با هم برابر نیستند'),
  });

  const onSubmit = () => {
    dispatch(changePasswordFromPanelHandler());
  };

  return (
    <div class='pas-conainer'>
      <div class='forgot-password'>
        <h1 class='txt-pass'>تغییر رمز عبور</h1>
        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={onSubmit}>
          <Form>
            <input
              className='password-input'
              type='password'
              placeholder='رمز قبلی'
              name='password'
            />
            <input
              className='password-input'
              type='password'
              placeholder='رمز جدید '
              name='newPassword'
            />
            <input
              className='password-input'
              type='password'
              placeholder='تکرار رمز جدید'
              name='confirmNewPassword'
            />
            <button type='submit' className='change-pas-btn'>
              تایید
            </button>
          </Form>
        </Formik>
      </div>
    </div>
  );
};
