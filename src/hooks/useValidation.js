import React from 'react';
import * as Yup from 'yup';

const useValidation = (action) => {
  let validationSchema;
  const options = ['دهم', 'یازدهم', 'دوازدهم'];
  const grades = options.map((option) => (
    <option value={option}>{option}</option>
  ));
  const firstName = Yup.string().required('پرکردن این فیلد الزامی است');
  const lastName = Yup.string().required('پرکردن این فیلد الزامی است');
  const phoneNumber = Yup.string()
    .required('پر کردن این فیلد الزامی است')
    .matches(
      /^(\+98|0098|98|0)?9\d{9}$/g,
      'شماره مبایل وارد شده معتبر نمی باشد'
    );
  const nationalCode = Yup.string().required('پر کردن این فیلد الزامی است ');
  const grade = Yup.string()
    .required('انتخاب پایه تحصیلی الزامی است')
    .oneOf(options);
  const password = Yup.string()
    .required('پرکردن این فیلد الزامی است')
    .min(8, 'گذرواژه نمی تواند کمتر از 8 کارکتر باشد');
  const confirmPassword = Yup.string()
    .required('پرکردن این فیلد الزامی است')
    .oneOf([Yup.ref('password'), ''], 'پسوورد ها با هم برابر نیستند');

  switch (action) {
    case 'register':
      validationSchema = Yup.object({
        phoneNumber,
        nationalCode,
      });
      return validationSchema;
    case 'login':
      validationSchema = Yup.object({
        phoneNumber,
        password,
      });
      return validationSchema;
    case 'complete-profile':
      validationSchema = Yup.object({
        firstName,
        lastName,
        grade,
        password,
        confirmPassword,
      });
      return [validationSchema, grades];
    case 'change-password':
      validationSchema = Yup.object({
        password,
        confirmPassword,
      });
      return validationSchema;
    case 'forget-password':
      validationSchema = Yup.object({
        phoneNumber,
      });
      return validationSchema;
    default:
      return 'invalid data';
  }
};

export default useValidation;
