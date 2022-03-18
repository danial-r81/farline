import { useDispatch } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { logoutHandler } from '../../../redux/features/userInfo';
import { useNavigate } from 'react-router';

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
                     <i class='bi bi-cup'></i>
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
                     <i class='bi bi-journal-text'></i>
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
                     <i class='bi bi-key'></i>
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
                     <i class='bi bi-gift'></i>
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
                     <i class='bi bi-cart3'></i>
                     <p>سبد خرید</p>
                  </NavLink>
               </button>
            </li>
            <li>
               <button onClick={() => dispatch(logoutHandler(history))}>
                  <a href='#' onClick={(e) => e.preventDefault()}>
                     <i class='bi bi-box-arrow-right'></i>
                     <p>خروج</p>
                  </a>
               </button>
            </li>
         </ul>
      </div>
   );
};

export default PanelNav;
