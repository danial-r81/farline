import { Link, NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { MdKeyboardArrowDown } from 'react-icons/md';
import { BsCart2 } from 'react-icons/bs';
import logo from '../../assets/Capture1634-removebg-preview.png';

import './nav.css';
const Nav = () => {
   const { firstName, lastName, is_active } = useSelector(
      (state) => state.user.userInfo
   );
   const { cartItemsCount } = useSelector((state) => state.cart);

   const menuTogglerHandler = () => {
      const menu = document.querySelector('.nav-bottom');
      const menuToggler = document.querySelector('.menu-toggler-btn');
      menu.classList.toggle('show-menu');
      menuToggler.classList.toggle('active');
   };

   return (
      <nav className='nav'>
         <div className='nav-top'>
            <div className='top-nav-container'>
               <div className='nav-right'>
                  <Link to='/' className='logo-container'>
                     <img src={logo} alt='' />
                  </Link>
               </div>
               <div className='nav-left'>
                  {firstName && lastName ? (
                     <Link to='/profile'>{`${firstName} ${lastName}`}</Link>
                  ) : (
                     <div className='login-btn'>
                        <Link to='login'>ورود | ثبت نام</Link>
                     </div>
                  )}
                  <Link to='profile/cart' className='cart-icon'>
                     {cartItemsCount !== 0 && is_active ? (
                        <div className='cart-items'>{cartItemsCount}</div>
                     ) : null}
                     <BsCart2 />
                  </Link>
               </div>
            </div>
         </div>
         <div className='nav-bottom'>
            <ul className='menu-items'>
               <li className='menu-item'>
                  <NavLink
                     onClick={menuTogglerHandler}
                     to='/'
                     className={(navData) =>
                        navData.isActive ? 'menu-link active-item' : 'menu-link'
                     }>
                     {' '}
                     صفحه اصلی{' '}
                  </NavLink>
               </li>
               <li className='menu-item'>
                  <NavLink
                     onClick={menuTogglerHandler}
                     to='/fartak-news'
                     className={(navData) =>
                        navData.isActive ? 'menu-link active-item' : 'menu-link'
                     }>
                     {' '}
                     تازه های فرتاک{' '}
                  </NavLink>
               </li>
               <li className='menu-item'>
                  <NavLink
                     onClick={menuTogglerHandler}
                     to='/teachers'
                     className={(navData) =>
                        navData.isActive ? 'menu-link active-item' : 'menu-link'
                     }>
                     {' '}
                     اساتید{' '}
                  </NavLink>
               </li>
               <li className='menu-item'>
                  <NavLink
                     onClick={menuTogglerHandler}
                     to='/contact-us'
                     className={(navData) =>
                        navData.isActive ? 'menu-link active-item' : 'menu-link'
                     }>
                     {' '}
                     ارتباط با ما{' '}
                  </NavLink>
               </li>
               <li className='menu-item'>
                  <NavLink
                     onClick={menuTogglerHandler}
                     to='/study-map'
                     className={(navData) =>
                        navData.isActive ? 'menu-link active-item' : 'menu-link'
                     }>
                     {' '}
                     نقشه راه{' '}
                  </NavLink>
               </li>
            </ul>
            <MdKeyboardArrowDown
               onClick={menuTogglerHandler}
               className='menu-toggler-btn'
            />
         </div>
      </nav>
   );
};

export default Nav;
