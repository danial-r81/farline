import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router';
import { fillProfileHandler } from '../../redux/features/userInfo';
import Input from './Input';
import FormContainer from './form-container/FormContainer';

import './form.css';
const CompleteProfile = () => {
   const dispatch = useDispatch();
   const navigate = useNavigate();

   const options = ['دهم', 'یازدهم', 'دوازدهم'];
   const grades = options.map((option) => (
      <option value={option}>{option}</option>
   ));

   const onSubmit = (value) => {
      dispatch(fillProfileHandler({ value, navigate }));
   };

   return (
      <FormContainer
         action='complete-profile'
         title='تکمیل اطلاعات'
         onSubmit={onSubmit}
         initialValues={{
            firstName: '',
            lastName: '',
            grade: '',
            password: '',
            confirmPassword: '',
         }}>
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
      </FormContainer>
   );
};

export default CompleteProfile;
