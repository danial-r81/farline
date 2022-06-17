import { Formik, Form } from 'formik';
import { useDispatch, useSelector } from 'react-redux';
import { changePasswordFromPanelHandler } from '../../../redux/features/userInfo';
import * as Yup from 'yup';
import Input from '../../forms/Input';

const EditAccount = () => {
   const dispatch = useDispatch();

   const initialValues = {
      oldPassword: '',
      password: '',
      confirmPassword: '',
   };
   const validationSchema = Yup.object({
      oldPassword: Yup.string().required('پر کردن این فیلد الزامی است'),
      password: Yup.string()
         .required('پرکردن این فیلد الزامی است')
         .min(8, 'گذرواژه نمی تواند کمتر از 8 کارکتر باشد'),
      confirmPassword: Yup.string()
         .required('پرکردن این فیلد الزامی است')
         .oneOf([Yup.ref('password'), ''], 'پسوورد ها با هم برابر نیستند'),
   });

   const onSubmit = (value) => {
      dispatch(changePasswordFromPanelHandler(value));
   };

   return (
      <div class='pas-conainer'>
         <div className='change-pas-img'>
            <img src='../images/Forgot-password.gif' alt='' />
         </div>
         <div class='forgot-password'>
            <h1 class='txt-pass'>تغییر رمز عبور</h1>
            <Formik
               initialValues={initialValues}
               validationSchema={validationSchema}
               onSubmit={onSubmit}>
               <Form>
                  <Input
                     className='password-input'
                     type='password'
                     placeholder='رمز قبلی'
                     name='oldPassword'
                  />
                  <Input
                     className='password-input'
                     type='password'
                     placeholder='رمز جدید '
                     name='password'
                  />
                  <Input
                     className='password-input'
                     type='password'
                     placeholder='تکرار رمز جدید'
                     name='confirmPassword'
                  />
                  <div className='pas-btn-container'>
                     <button type='submit' className='change-pas-btn'>
                        تایید
                     </button>
                  </div>
               </Form>
            </Formik>
         </div>
      </div>
   );
};

export default EditAccount;
