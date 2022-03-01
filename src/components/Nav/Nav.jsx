import { Link, NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import logo from '../../assets/logo.png';

import './nav.css';
const Nav = () => {
   const { firstName, lastName } = useSelector(
      (state) => state.userReducer.userInfo
   );

   const mobileMenuToggler = () => {
      document.querySelector('.mobile-menu').classList.toggle('close-btn');
      document.querySelector('.top-nav').classList.toggle('show-menu');
   };

   window.addEventListener('scroll', () => {
      const header = document.querySelector('nav');
      header.classList.toggle('sticky', window.scrollY > 0);
   });

   return (
      <header dir='ltr' id='header'>
         <nav>
            <button className='mobile-menu' onClick={mobileMenuToggler}>
               <span className='bar'></span>
               <span className='bar'></span>
               <span className='bar'></span>
            </button>
            <section className='top-nav'>
               <div className='left-flex'>
                  <div className='logo'>
                     <a href='#'>
                        <img src={logo} alt='طوس کلاس' />
                     </a>
                  </div>
                  {firstName && lastName ? (
                     <div className='username'>
                        <Link to='/profile/dashbord'>{`${firstName} ${lastName}`}</Link>
                     </div>
                  ) : (
                     <div className='login'>
                        <div className='login-button'>
                           <NavLink to='/login'>ورود/ ثبت نام</NavLink>
                        </div>
                     </div>
                  )}
               </div>
               <ul className='menu'>
                  <li className='menu-item'>
                     <NavLink
                        to='/'
                        className='menu-link'
                        exact
                        activeClassName='active'
                        onClick={mobileMenuToggler}>
                        صفحه اصلی
                     </NavLink>
                  </li>
                  <li class='menu-item'>
                     <NavLink
                        to='/select-topic'
                        className='menu-link'
                        exact
                        onClick={mobileMenuToggler}>
                        دوره ها
                     </NavLink>
                  </li>
                  <li class='menu-item'>
                     <NavLink
                        to='/teachers'
                        className='menu-link'
                        exact
                        onClick={mobileMenuToggler}>
                        اساتید
                     </NavLink>
                  </li>
                  <li class='menu-item'>
                     <NavLink
                        to='/contact-us'
                        className='menu-link'
                        exact
                        onClick={mobileMenuToggler}>
                        ارتباط با ما
                     </NavLink>
                  </li>
                  <li class='menu-item'>
                     <NavLink
                        to='/key-plan'
                        className='menu-link'
                        exact
                        onClick={mobileMenuToggler}>
                        نقشه راه
                     </NavLink>
                  </li>
               </ul>
            </section>
         </nav>
      </header>
   );
};

export default Nav;
