import { Form, Formik } from 'formik';
import { motion } from 'framer-motion';
import { Input } from './Input';
import { useDispatch } from 'react-redux';
import { forgotPasswordHandler } from '../../redux/features/userInfo';
import { withRouter } from 'react-router';
import { userRegister } from '../../services/userServices';
import FormVariant from './form-variants/formVariants';

import './form.css';
const ForgetPassword = ({ history }) => {
  const dispatch = useDispatch();

  const initialValues = {
    phoneNumber: '',
  };

  const validationSchema = userRegister('forget-password');

  const onSubmit = (values) => {
    const { phoneNumber } = values;
    console.log(phoneNumber);
    dispatch(forgotPasswordHandler({ phoneNumber, history }));
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
          <h1 className='header'>لطفا شماره موبایل خود را وارد کنید</h1>
          <Input
            id='phonenumber'
            type='tel'
            name='phoneNumber'
            placeholder='شماره مبایل'
          />
          <button className='submit' type='submit'>
            دریافت کد
          </button>
        </motion.div>
      </Form>
    </Formik>
  );
};

export default withRouter(ForgetPassword);
