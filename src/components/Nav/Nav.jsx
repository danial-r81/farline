import { Link, NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { MdKeyboardArrowDown } from 'react-icons/md';
import logo from '../../assets/logo.png';

import './nav.css';
const Nav = () => {
   const { firstName, lastName } = useSelector((state) => state.user.userInfo);

   const menuTogglerHandler = () => {
      const menu = document.querySelector('.nav-bottom');
      const menuToggler = document.querySelector('.menu-toggler-btn');
      menu.classList.toggle('show-menu');
      menuToggler.classList.toggle('active');
   };

   return (
      <nav class='nav'>
         <div class='nav-top'>
            <div class='top-nav-container'>
               <div class='nav-right'>
                  <div class='logo-container'>
                     <img src={logo} alt='' />
                  </div>
               </div>
               <div class='nav-left'>
                  {firstName && lastName ? (
                     <Link to='/profile'>{`${firstName} ${lastName}`}</Link>
                  ) : (
                     <div class='login-btn'>
                        <Link to='login'>ورود | ثبت نام</Link>
                     </div>
                  )}
                  <Link to='profile/cart' class='cart-icon'>
                     <i class='bi bi-cart'></i>
                  </Link>
               </div>
            </div>
         </div>
         <div class='nav-bottom'>
            <ul class='menu-items'>
               <li class='menu-item'>
                  <NavLink
                     to='/'
                     className={(navData) =>
                        navData.isActive ? 'menu-link active-item' : 'menu-link'
                     }>
                     {' '}
                     صفحه اصلی{' '}
                  </NavLink>
               </li>
               <li class='menu-item'>
                  <NavLink
                     to='/fartak-news'
                     className={(navData) =>
                        navData.isActive ? 'menu-link active-item' : 'menu-link'
                     }>
                     {' '}
                     تازه های فرتاک{' '}
                  </NavLink>
               </li>
               <li class='menu-item'>
                  <NavLink
                     to='/teachers'
                     className={(navData) =>
                        navData.isActive ? 'menu-link active-item' : 'menu-link'
                     }>
                     {' '}
                     اساتید{' '}
                  </NavLink>
               </li>
               <li class='menu-item'>
                  <NavLink
                     to='/contact-us'
                     className={(navData) =>
                        navData.isActive ? 'menu-link active-item' : 'menu-link'
                     }>
                     {' '}
                     ارتباط با ما{' '}
                  </NavLink>
               </li>
               <li class='menu-item'>
                  <NavLink
                     to='/key-plan'
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

      // <nav className='nav'>
      //    <div className='nav-top'>
      //       <div className='top-nav-container'>
      //          <div className='nav-right'>
      //             <div className='logo-container'>
      //                <img src={logo} alt='فرلاین' />
      //             </div>
      //          </div>
      //          <div className='nav-left'>
      //             {firstName && lastName ? (
      //                <div className='username'>
      //                   <Link to='/profile/dashbord'>{`${firstName} ${lastName}`}</Link>
      //                </div>
      //             ) : (
      //                <div className='login-btn'>
      //                   <NavLink to='/login' href='#'>
      //                      ورود | ثبت نام
      //                   </NavLink>
      //                </div>
      //             )}

      //             <div className='cart-icon'>
      //                <i className='bi bi-cart'></i>
      //             </div>
      //          </div>
      //       </div>
      //    </div>
      //    <div className='nav-bottom'>
      //       <ul className='menu-items'>
      //          <li className='menu-item'>
      //             <NavLink
      //                to='/'
      //                className={(navData) =>
      //                   navData.isActive ? 'menu-link active-item' : 'menu-link'
      //                }>
      //                {' '}
      //                صفحه اصلی{' '}
      //             </NavLink>
      //          </li>
      //          <li className='menu-item'>
      //             <NavLink
      //                to='/fartak-news'
      //                className={(navData) =>
      //                   navData.isActive ? 'menu-link active-item' : 'menu-link'
      //                }>
      //                {' '}
      //                تازه های فرتاک{' '}
      //             </NavLink>
      //          </li>
      //          <li className='menu-item'>
      //             <NavLink
      //                to='/teachers'
      //                className={(navData) =>
      //                   navData.isActive ? 'menu-link active-item' : 'menu-link'
      //                }>
      //                {' '}
      //                اساتید{' '}
      //             </NavLink>
      //          </li>
      //          <li className='menu-item'>
      //             <NavLink
      //                to='/contact-us'
      //                className={(navData) =>
      //                   navData.isActive ? 'menu-link active-item' : 'menu-link'
      //                }>
      //                {' '}
      //                ارتباط با ما{' '}
      //             </NavLink>
      //          </li>
      //          <li className='menu-item'>
      //             <NavLink
      //                to='/key-plan'
      //                className={(navData) =>
      //                   navData.isActive ? 'menu-link active-item' : 'menu-link'
      //                }>
      //                {' '}
      //                نقشه راه{' '}
      //             </NavLink>
      //          </li>
      //       </ul>
      //    </div>
      // </nav>
   );
};

export default Nav;
