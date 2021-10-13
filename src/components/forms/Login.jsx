import { Form, Formik } from 'formik';
import { NavLink } from 'react-router-dom';
import { Input } from './Input';
import { withRouter } from 'react-router';

import './form.css';

const Login = ({ history }) => {
  console.log(history);

  return (
    <Formik>
      <Form className='form'>
        <div className='form-container'>
          <h1 className='header'>ورود</h1>
          <Input type='tel' name='phonenumber' placeholder='شماره مبایل' />
          <Input type='password' name='password' placeholder='رمز عبور' />
          <div className='btns'>
            <button className='submit' type='submit'>
              ورود
            </button>
            <NavLink className='register' to='/register'>
              ثبت نام
            </NavLink>
          </div>
        </div>
      </Form>
    </Formik>
  );
};

export default withRouter(Login);
