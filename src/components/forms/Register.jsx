import { useNavigate } from 'react-router';
import { Input } from './Input';
import { useDispatch } from 'react-redux';
import { registerHandler } from '../../redux/features/userInfo';
import FormContainer from './form-container/FormContainer';

const Register = () => {
   const dispatch = useDispatch();
   const navigate = useNavigate();

   const onSubmit = (value) => {
      dispatch(registerHandler({ value, navigate }));
   };
   return (
      <FormContainer
         action='register'
         onSubmit={onSubmit}
         initialValues={{ nationalCode: '', phoneNumber: '' }}
         title='ثبت نام'>
         <Input type='text' name='nationalCode' placeholder='کد ملی' />
         <Input type='text' name='phoneNumber' placeholder='شماره موبایل' />
         <button className='submit' type='submit'>
            دریافت کد
         </button>
      </FormContainer>
   );
};

export default Register;
