import { Link } from 'react-router-dom';

import './access-denied.css';

const AccessDenied = () => {
   return (
      <div className='access-denied-container'>
         <div className='access-denied-text'>
            برای دسترسی به این بخش ابتدا وارد حساب کاربری خود شوید
         </div>
         <div className='go-to-login'>
            برای وارد شدن به حساب خود می توانید از طریق این
            <Link to='/login'> لینک</Link> اقدام کنید
         </div>
      </div>
   );
};

export default AccessDenied;
