import { useDispatch, useSelector } from 'react-redux';
import { Form, Formik } from 'formik';
import { motion } from 'framer-motion';
import { withRouter } from 'react-router';
import { fillProfileHandler } from '../../redux/features/userInfo';
import { Input } from './Input';
import useForm from '../../hooks/useValidation';
import FormVariants from './form-variants/formVariants';

import './form.css';
const CompleteProfile = ({ history }) => {
  const dispatch = useDispatch();
  // const history = useHistory();
  const userRegisterInfo = useSelector((state) => state.userReducer.userInfo);

  console.log(userRegisterInfo);

  const initialValues = {
    firstName: '',
    lastName: '',
    grade: '',
    password: '',
    confirmPassword: '',
  };

  const [validationSchema, grades] = useForm('complete-profile');

  const onSubmit = (value) => {
    dispatch(fillProfileHandler({ value, history }));
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={onSubmit}>
      <Form className='form'>
        <motion.div
          className='form-container'
          variants={FormVariants}
          initial='hidden'
          animate='visible'>
          <h1 className='header'>تکمیل اطلاعات</h1>
          <Input type='text' name='firstName' placeholder='نام' />
          <Input type='text' name='lastName' placeholder='نام خانوادگی' />
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
