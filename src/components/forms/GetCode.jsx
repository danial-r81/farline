import { motion } from 'framer-motion';
import { useDispatch, useSelector } from 'react-redux';
import { withRouter } from 'react-router';
import { getCodeAgain } from '../../redux/features/userInfo';
import Toast from '../../toasts/toasts';

const GetCode = ({ history }) => {
  const dispatch = useDispatch();
  const userNumber = useSelector((state) => state.userReducer.phoneNumber);
  const code = useSelector((state) => state.userReducer.code);
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

  const goToFillAccount = () => {
    const input = document.querySelector('.input-code').value;

    if (input === code) {
      history.push('/fill-profile');
    } else {
      Toast.toastError('کد وارد شده صحیح نمی بشد');
    }
  };

  return (
    <div className='form'>
      <motion.div
        className='form-container'
        variants={FormVariant}
        initial='hidden'
        animate='visible'
        exit='exit'>
        <div className='get-code-text'>
          کد ارسال شده به شماره {userNumber} را وارد کنید{' '}
        </div>
        <input className='input-code' type='text' />
        <button className='submit' type='submit' onClick={goToFillAccount}>
          ثبت نام
        </button>
        <div className='resend'>
          <p className='resend-code-text'>کد فعال سازی را دریافت نکرده اید؟</p>
          <button
            className='resend-code-btn'
            onClick={() => dispatch(getCodeAgain(userNumber))}>
            <div className='resend-text'>ارسال مجدد</div>
            <span class='lnr lnr-undo'></span>
          </button>
        </div>
      </motion.div>
    </div>
  );
};

export default withRouter(GetCode);
