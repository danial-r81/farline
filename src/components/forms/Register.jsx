import { Form, Formik } from 'formik';
import { withRouter } from 'react-router';
import { Input } from './Input';
import * as Yup from 'yup';
import { useDispatch } from 'react-redux';
import { motion } from 'framer-motion';
import { userRegister } from '../../services/userServices';
import { toast } from 'react-toastify';
import { userRegisterHandler } from '../../redux/features/userInfo';

const Register = ({ history }) => {
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

  const initialValues = {
    nationalCode: '',
    phoneNumber: '',
  };

  const validationSchema = Yup.object({
    nationalCode: Yup.string().required('پر کردن این فیلد الزامی است '),
    phoneNumber: Yup.string()
      .required('پر کردن این فیلد الزامی است')
      .matches(
        /^(\+98|0098|98|0)?9\d{9}$/g,
        'شماره مبایل وارد شده معتبر نمی باشد'
      ),
  });

  const onSubmit = async (value) => {
    try {
      const { data, status } = await userRegister(value);
      const code = data.code;
      dispatch(userRegisterHandler({ value, code }));

      if (status === 201) {
        history.push('/get-code');
      }
    } catch (e) {
      if (e.response) {
        console.log('response', e.response);
        if (e.response.status === 400) {
          toast.warn('کاربر با این مشخصات موجود است', {
            position: 'top-right',
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
          });
          console.log(400);
        }
      } else if (e.message) {
        console.log(e.message);
      } else if (e.request) {
        console.log('request', e.request);
      }
    }
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
