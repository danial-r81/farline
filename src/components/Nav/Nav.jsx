import { Link, NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';

import logo from '../../assets/logo.png';

import './nav.css';
const Nav = () => {
   const { firstName, lastName } = useSelector((state) => state.user.userInfo);

   const mobileMenuToggler = () => {
      document.querySelector('.mobile-menu').classList.toggle('close-btn');
      document.querySelector('.top-nav').classList.toggle('show-menu');
   };

   window.addEventListener('scroll', () => {
      const header = document.querySelector('nav');
      header.classList.toggle('sticky', window.scrollY > 0);
   });

   return (
      <nav class='nav'>
         <div class='nav-top'>
            <div class='top-nav-container'>
               <div class='nav-right'>
                  <a href='#' class='menu-link'>
                     {' '}
                     صفحه اصلی{' '}
                  </a>
               </div>
               <div className='nav-center'>
                  <div class='logo-container'>
                     <img src={logo} alt='' />
                  </div>
               </div>
               <div class='nav-left'>
                  <div class='login-btn'>
                     <a href='#'>ورود | ثبت نام</a>
                  </div>
                  {/* <div class='cart-icon'>
                     <i class='bi bi-cart'></i>
                  </div> */}
               </div>
            </div>
         </div>
         <div class='nav-bottom'>
            <ul class='menu-items'>
               <li class='menu-item'>
                  <a href='#' class='menu-link'>
                     {' '}
                     تازه های فرتاک{' '}
                  </a>
               </li>
               <li class='menu-item'>
                  <a href='#' class='menu-link'>
                     {' '}
                     اساتید{' '}
                  </a>
               </li>
               <li class='menu-item'>
                  <a href='#' class='menu-link'>
                     {' '}
                     ارتباط با ما{' '}
                  </a>
               </li>
               <li class='menu-item'>
                  <a href='#' class='menu-link'>
                     {' '}
                     نقشه راه{' '}
                  </a>
               </li>
            </ul>
         </div>
      </nav>

      // <header dir='ltr' id='header'>
      //    <nav>
      //       <button className='mobile-menu' onClick={mobileMenuToggler}>
      //          <span className='bar'></span>
      //          <span className='bar'></span>
      //          <span className='bar'></span>
      //       </button>
      //       <section className='top-nav'>
      //          <div className='left-flex'>
      //             <div className='logo'>
      //                <a href='/'>
      //                   <img src={logo} alt='طوس کلاس' />
      //                </a>
      //             </div>
      //             {firstName && lastName ? (
      //                <div className='username'>
      //                   <Link to='/profile/dashbord'>{`${firstName} ${lastName}`}</Link>
      //                </div>
      //             ) : (
      //                <div className='login'>
      //                   <div className='login-button'>
      //                      <NavLink to='/login'>ورود/ ثبت نام</NavLink>
      //                   </div>
      //                </div>
      //             )}
      //          </div>
      //          <ul className='menu'>
      //             <li className='menu-item'>
      //                <NavLink
      //                   to='/'
      //                   className={(navData) =>
      //                      navData.isActive ? 'menu-link active' : 'menu-link'
      //                   }
      //                   onClick={mobileMenuToggler}>
      //                   صفحه اصلی
      //                </NavLink>
      //             </li>
      //             <li className='menu-item'>
      //                <NavLink
      //                   to='/fartak-news'
      //                   className={(navData) =>
      //                      navData.isActive ? 'menu-link active' : 'menu-link'
      //                   }
      //                   onClick={mobileMenuToggler}>
      //                   تازه های فرتاک
      //                </NavLink>
      //             </li>
      //             <li className='menu-item'>
      //                <NavLink
      //                   to='/teachers'
      //                   className={(navData) =>
      //                      navData.isActive ? 'menu-link active' : 'menu-link'
      //                   }
      //                   onClick={mobileMenuToggler}>
      //                   اساتید
      //                </NavLink>
      //             </li>
      //             <li className='menu-item'>
      //                <NavLink
      //                   to='/contact-us'
      //                   className={(navData) =>
      //                      navData.isActive ? 'menu-link active' : 'menu-link'
      //                   }
      //                   onClick={mobileMenuToggler}>
      //                   ارتباط با ما
      //                </NavLink>
      //             </li>
      //             <li className='menu-item'>
      //                <NavLink
      //                   to='/key-plan'
      //                   className={(navData) =>
      //                      navData.isActive ? 'menu-link active' : 'menu-link'
      //                   }
      //                   onClick={mobileMenuToggler}>
      //                   نقشه راه
      //                </NavLink>
      //             </li>
      //          </ul>
      //       </section>
      //    </nav>
      // </header>
   );
};

export default Nav;
