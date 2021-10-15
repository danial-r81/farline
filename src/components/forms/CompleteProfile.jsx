import { FastField, Field, Form, Formik } from 'formik';
import { motion } from 'framer-motion';
import { withRouter } from 'react-router';
import { Input } from './Input';
import * as Yup from 'yup';
import { useDispatch } from 'react-redux';
import { initialValuesForFillProfile } from '../../redux/actions/userInfo';

import './form.css';
import { useSelector } from 'react-redux';
import Select from 'react-select';
import Option from 'react-select';

const CompleteProfile = ({ history }) => {
  const dispatch = useDispatch();
  const userRegisterInfo = useSelector((state) => state.phoneNumber);
  console.log(userRegisterInfo);
  console.log(history);

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
        type: 'spring',
        stiffness: 100,
      },
    },
    exit: {
      y: '120vh',
      opacity: 0,
      transition: {
        ease: 'easeInOut',
        delay: 0.5,
      },
    },
  };

  const options = ['دهم', 'یازدهم', 'دوازدهم'];

  const grades = options.map((option) => (
    <option value={option}>{option}</option>
  ));

  const initialValues = {
    fullName: '',
    grade: '',
    password: '',
    confirmPassword: '',
  };

  const validationSchema = Yup.object().shape({
    fullName: Yup.string().required('پرکردن این فیلد الزامی است'),
    grade: Yup.string()
      .required('انتخاب پایه تحصیلی الزامی است')
      .oneOf(options),
    password: Yup.string()
      .required('پرکردن این فیلد الزامی است')
      .min(8, 'گذرواژه نمی تواند کمتر از 8 کارکتر باشد'),
    confirmPassword: Yup.string()
      .required('پرکردن این فیلد الزامی است')
      .oneOf([Yup.ref('password'), ''], 'پسوورد ها با هم برابر نیستند'),
  });

  const onSubmit = (value) => {
    console.log(value);
    history.replace('/');
    dispatch(initialValuesForFillProfile(value));
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
          <h1 className='header'>تکمیل اطلاعات</h1>
          <Input type='text' name='fullName' placeholder='نام و نام خانوادگی' />
          <Input
            type='select'
            name='grade'
            id='grade'
            placeholder='پایه تحصیلی'
            grades={grades}
            className='grade'
          />
          <Input type='password' name='password' placeholder='رمز عبور' />
          <Input
            type='password'
            name='confirmPassword'
            placeholder='تکرار رمز عبور'
          />
          <button className='submit' type='submit'>
            ثبت اطلاعات
          </button>
        </motion.div>
      </Form>
    </Formik>
  );
};

export default withRouter(CompleteProfile);
