import { Formik, Form } from 'formik';
import { useDispatch, useSelector } from 'react-redux';
import { changePasswordFromPanelHandler } from '../../../redux/features/userInfo';
import * as Yup from 'yup';
import { Input } from '../../forms/Input';
import Toast from '../../../toasts/toasts';

export const EditAccount = () => {
  const dispatch = useDispatch();
  const password = useSelector((state) => state.userReducer.userInfo.password);

  const initialValues = {
    password: '',
    newPassword: '',
    confirmNewPassword: '',
  };
  const validationSchema = Yup.object({
    password: Yup.string().required('پر کردن این فیلد الزامی است'),
    newPassword: Yup.string()
      .required('پرکردن این فیلد الزامی است')
      .min(8, 'گذرواژه نمی تواند کمتر از 8 کارکتر باشد'),
    confirmNewPassword: Yup.string()
      .required('پرکردن این فیلد الزامی است')
      .oneOf([Yup.ref('newPassword'), ''], 'پسوورد ها با هم برابر نیستند'),
  });

  const onSubmit = (value) => {
    if (value.password !== password) {
      Toast.toastError('پسوورد شما اشتباه است');
    } else {
      dispatch(changePasswordFromPanelHandler({ value }));
    }
  };

  return (
    <div class='pas-conainer'>
      <div className='change-pas-img'>
        <img src='../images/Security-On.gif' alt='' />
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
              name='password'
            />
            <Input
              className='password-input'
              type='password'
              placeholder='رمز جدید '
              name='newPassword'
            />
            <Input
              className='password-input'
              type='password'
              placeholder='تکرار رمز جدید'
              name='confirmNewPassword'
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
