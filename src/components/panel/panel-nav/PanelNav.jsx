import { useDispatch } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { logoutHandler } from '../../../redux/features/userInfo';
import { withRouter } from 'react-router-dom';
import MediaQuery from 'react-responsive';
import { useHistory } from 'react-router';

import {
   dashbordLogo,
   bookLogo,
   changePassword,
   discountLogo,
   logoutLogo,
   cartLogo,
} from '../../../assets/index';

const PanelNav = () => {
   const dispatch = useDispatch();
   const history = useHistory();

   return (
      <div className='panel-nav'>
         <ul>
            <li>
               <button>
                  <NavLink to='/profile/dashbord' className='panel-title'>
                     {/* <i className='fa fa-coffee'></i> */}
                     <img src={dashbordLogo} alt='' />
                     <p>میز مطالعه</p>
                  </NavLink>
               </button>
            </li>
            <li>
               <button>
                  <NavLink to='/profile/courses' className='panel-title'>
                     {/* <i className='fa fa-book'></i> */}
                     <img src={bookLogo} alt='' />
                     <p>درس های من</p>
                  </NavLink>
               </button>
            </li>
            <li>
               <button>
                  <NavLink to='/profile/edit-account' className='panel-title'>
                     {/* <i className='fa fa-edit'></i> */}
                     <img src={changePassword} alt='' />
                     <p>تغییر رمز عبور</p>
                  </NavLink>
               </button>
            </li>
            <li>
               <button>
                  <NavLink
                     to='/profile/suggested-courses'
                     className='panel-title'>
                     {/* <i className='fa fa-fire'></i> */}
                     <img src={discountLogo} alt='' />
                     <p>دوره های پیشنهادی</p>
                  </NavLink>
               </button>
            </li>
            <li>
               <button>
                  <NavLink to='/profile/cart' className='panel-title'>
                     <img src={cartLogo} alt='' />
                     <p>سبد خرید</p>
                  </NavLink>
               </button>
            </li>
            <li>
               <button onClick={() => dispatch(logoutHandler(history))}>
                  <a href='' onClick={(e) => e.preventDefault()}>
                     {/* <i className='fa fa-sign-out'></i> */}
                     <img src={logoutLogo} alt='' />
                     <p>خروج</p>
                  </a>
               </button>
            </li>
         </ul>
      </div>
   );
};

export default withRouter(PanelNav);
