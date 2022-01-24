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
    const menuItems = document.querySelectorAll('.menu-item');
    menuItems.forEach((item) => {
      item.addEventListener('click', () => {
        for (let index = 0; index < menuItems.length; index++) {
          if (menuItems[index].classList.contains('active')) {
            menuItems[index].classList.remove('active');
          }
        }
        item.classList.add('active');
      });
    });
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
              <NavLink
                to='/'
                className='menu-link'
                onClick={closeMenu}
                activeClassName='active-item'>
                صفحه اصلی
              </NavLink>
            </li>
            <li class='menu-item'>
              <NavLink
                to='/courses'
                className='menu-link'
                onClick={closeMenu}
                activeClassName='active-item'>
                دوره ها
              </NavLink>
            </li>
            <li class='menu-item'>
              <NavLink
                to='/teachers'
                className='menu-link'
                onClick={closeMenu}
                activeClassName='active-item'>
                اساتید
              </NavLink>
            </li>
            <li class='menu-item'>
              <NavLink
                to='/contact-us'
                className='menu-link'
                onClick={closeMenu}
                activeClassName='active-item'>
                ارتباط با ما
              </NavLink>
            </li>
            <li class='menu-item'>
              <NavLink
                to='/edu-cal'
                className='menu-link'
                onClick={closeMenu}
                activeClassName='active-item'>
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
