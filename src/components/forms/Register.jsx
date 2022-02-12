import { Form, Formik } from 'formik';
import { withRouter } from 'react-router';
import { Input } from './Input';
import * as Yup from 'yup';
import { useDispatch } from 'react-redux';
import { motion } from 'framer-motion';
import { registerHandler } from '../../redux/features/userInfo';
import useForm from '../../hooks/useValidation';
import FormVariant from './form-variants/formVariants';

const Register = ({ history }) => {
  const dispatch = useDispatch();

  const initialValues = {
    nationalCode: '',
    phoneNumber: '',
  };

  const validationSchema = useForm('register');

  const onSubmit = (value) => {
    dispatch(registerHandler({ value, history }));
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
          <h1 className='header'>ثبت نام</h1>
          <Input type='text' name='nationalCode' placeholder='کد ملی' />
          <Input type='text' name='phoneNumber' placeholder='شماره موبایل' />
          <button className='submit' type='submit'>
            دریافت کد
          </button>
        </motion.div>
      </Form>
    </Formik>
  );
};

export default withRouter(Register);
