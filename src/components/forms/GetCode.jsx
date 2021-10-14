import { motion } from 'framer-motion';
import { useSelector } from 'react-redux';
import { withRouter } from 'react-router';

const GetCode = ({ history }) => {
  const userNumber = useSelector((state) => state.phoneNumber);
  // const userInfo = useSelector((state) => state.userInfo);
  // console.log(userInfo);
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
    history.replace('fill-profile');
  };

  console.log(userNumber);
  return (
    <motion.div
      className='form'
      variants={FormVariant}
      initial='hidden'
      animate='visible'
      exit='exit'>
      <div className='form-container'>
        <div className='get-code-text'>
          کد ارسال شده به شماره {userNumber} را وارد کنید{' '}
        </div>
        <input className='input-code' type='text' />
        <button className='submit' type='submit' onClick={goToFillAccount}>
          ثبت نام
        </button>
        <div className='resend'>
          <p className='resend-code-text'>کد فعال سازی را دریافت نکرده اید؟</p>
          <button className='resend-code-btn'>
            <div className='resend-text'>ارسال مجدد</div>
            <span class='lnr lnr-undo'></span>
          </button>
        </div>
      </div>
    </motion.div>
  );
};

export default withRouter(GetCode);
