import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router';
import { changePasswordHandler } from '../../redux/features/userInfo';
import Input from './Input';
import FormContainer from './form-container/FormContainer';

const ChangePassword = () => {
   const phoneNumber = useSelector((state) => state.user.userInfo.phoneNumber);
   const dispatch = useDispatch();
   const navigate = useNavigate();

   const onSubmit = (values) => {
      const { password } = values;
      dispatch(changePasswordHandler({ phoneNumber, password, navigate }));
   };

   return (
      <FormContainer
         action='change-password'
         initialValues={{
            password: '',
            confirmPassword: '',
         }}
         onSubmit={onSubmit}
         title='تغییر رمز عبور'>
         <Input type='password' name='password' placeholder='رمز عبور جدید' />
         <Input
            type='password'
            name='confirmPassword'
            placeholder='تکرار رمز عبور جدید'
         />
         <button className='submit change-password' type='submit'>
            تغییر رمز عبور
         </button>
      </FormContainer>
   );
};

export default ChangePassword;
