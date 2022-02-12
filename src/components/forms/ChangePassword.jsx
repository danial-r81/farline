import { Form, Formik } from 'formik';
import { motion } from 'framer-motion';
import { useDispatch, useSelector } from 'react-redux';
import { withRouter } from 'react-router';
import * as Yup from 'yup';
import useValidation from '../../hooks/useValidation';
import { changePasswordHandler } from '../../redux/features/userInfo';
import { Input } from './Input';
import FormVariant from './form-variants/formVariants';

const ChangePassword = ({ history }) => {
  // const phoneNumber = localStorage.getItem('phoneNumber');
  // console.log(phoneNumber);
  const phoneNumber = useSelector(
    (state) => state.userReducer.userInfo.phoneNumber
  );
  const dispatch = useDispatch();

  const initialValues = {
    password: '',
    confirmPassword: '',
  };

  const validationSchema = useValidation('change-password');

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
