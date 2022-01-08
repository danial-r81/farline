import './nav.css';
import { Link, NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';

const Nav = () => {
  const { firstName, lastName } = useSelector(
    (state) => state.userReducer.userInfo
  );

  const mobileMenuToggler = () => {
    document.querySelector('.top-nav').classList.toggle('show-menu');
  };

  const closeMenu = () => {
    document.querySelector('.top-nav').classList.remove('show-menu');
  };

  return (
    <header dir='ltr' id='header'>
      <nav>
        <button className='mobile-menu' onClick={mobileMenuToggler}>
          <span className='bar'></span>
          <span className='bar'></span>
          <span className='bar'></span>
        </button>
        <section className='top-nav'>
          <button className='close-btn' onClick={closeMenu}>
            <span className='bar'></span>
            <span className='bar'></span>
            <span className='bar'></span>
          </button>
          <div className='left-flex'>
            <div className='logo'>
              <a href='#'>
                <img src='images/logo.png' alt='طوس کلاس' />
              </a>
            </div>
            {firstName && lastName ? (
              <div className='username'>
                <Link to='/profile'>{`${firstName} ${lastName}`}</Link>
              </div>
            ) : (
              <div className='login'>
                <div className='login-button'>
                  <NavLink to='/login' onClick={closeMenu}>
                    ورود/ ثبت نام
                  </NavLink>
                </div>
              </div>
            )}
          </div>
          <ul className='menu'>
            <li className='menu-item'>
              <NavLink to='/' className='menu-link' onClick={closeMenu}>
                خانه
              </NavLink>
            </li>
            <li class='menu-item'>
              <NavLink to='/courses' className='menu-link' onClick={closeMenu}>
                دوره ها
              </NavLink>
            </li>
            <li class='menu-item'>
              <NavLink to='/teachers' className='menu-link' onClick={closeMenu}>
                اساتید
              </NavLink>
            </li>
            <li class='menu-item'>
              <NavLink
                to='/contact-us'
                className='menu-link'
                onClick={closeMenu}>
                ارتباط با ما
              </NavLink>
            </li>
            <li class='menu-item'>
              <NavLink to='/edu-cal' className='menu-link' onClick={closeMenu}>
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
