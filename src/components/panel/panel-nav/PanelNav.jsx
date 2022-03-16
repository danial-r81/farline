import { useDispatch } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { logoutHandler } from '../../../redux/features/userInfo';
import { withRouter } from 'react-router-dom';
import MediaQuery from 'react-responsive';
import { useNavigate } from 'react-router';

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
   const history = useNavigate();

   return (
      <div className='panel-nav'>
         <ul>
            <li>
               <button>
                  <NavLink
                     to='/profile/dashbord'
                     className={(navData) =>
                        navData.isActive
                           ? 'panel-title active-panel-menu'
                           : 'panel-title'
                     }>
                     <img src={dashbordLogo} alt='' />
                     <p>میز مطالعه</p>
                  </NavLink>
               </button>
            </li>
            <li>
               <button>
                  <NavLink
                     to='/profile/courses'
                     className={(navData) =>
                        navData.isActive
                           ? 'panel-title active-panel-menu'
                           : 'panel-title'
                     }>
                     <img src={bookLogo} alt='' />
                     <p>کلاس های من</p>
                  </NavLink>
               </button>
            </li>
            <li>
               <button>
                  <NavLink
                     to='/profile/edit-account'
                     className={(navData) =>
                        navData.isActive
                           ? 'panel-title active-panel-menu'
                           : 'panel-title'
                     }>
                     <img src={changePassword} alt='' />
                     <p>تغییر رمز عبور</p>
                  </NavLink>
               </button>
            </li>
            <li>
               <button>
                  <NavLink
                     to='/profile/suggested-courses'
                     className={(navData) =>
                        navData.isActive
                           ? 'panel-title active-panel-menu'
                           : 'panel-title'
                     }>
                     <img src={discountLogo} alt='' />
                     <p>دوره های پیشنهادی</p>
                  </NavLink>
               </button>
            </li>
            <li>
               <button>
                  <NavLink
                     to='/profile/cart'
                     className={(navData) =>
                        navData.isActive
                           ? 'panel-title active-panel-menu'
                           : 'panel-title'
                     }>
                     <img src={cartLogo} alt='' />
                     <p>سبد خرید</p>
                  </NavLink>
               </button>
            </li>
            <li>
               <button onClick={() => dispatch(logoutHandler(history))}>
                  <a href='' onClick={(e) => e.preventDefault()}>
                     <img src={logoutLogo} alt='' />
                     <p>خروج</p>
                  </a>
               </button>
            </li>
         </ul>
      </div>
   );
};

export default PanelNav;
