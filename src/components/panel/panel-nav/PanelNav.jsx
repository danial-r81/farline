import { useDispatch } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { logoutHandler } from '../../../redux/features/userInfo';
import { useNavigate } from 'react-router';
import { BiCoffee, BiCartAlt, BiLockOpenAlt } from 'react-icons/bi';
import { BsEasel, BsEmojiWink, BsDoorOpen } from 'react-icons/bs';
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
                     <BiCoffee />
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
                     <BsEasel />
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
                     <BiLockOpenAlt />
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
                     <BsEmojiWink />
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
                     <BiCartAlt />
                     <p>سبد خرید</p>
                  </NavLink>
               </button>
            </li>
            <li>
               <button onClick={() => dispatch(logoutHandler(history))}>
                  <a href='#' onClick={(e) => e.preventDefault()}>
                     <BsDoorOpen />
                     <p>خروج</p>
                  </a>
               </button>
            </li>
         </ul>
      </div>
   );
};

export default PanelNav;
