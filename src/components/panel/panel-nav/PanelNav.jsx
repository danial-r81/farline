import React from 'react';
import { useDispatch } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { logoutHandler } from '../../../redux/features/userInfo';
import { withRouter } from 'react-router-dom';

const PanelNav = ({ history }) => {
  const dispatch = useDispatch();
  const toggleMenu = () => {
    const menu = document.querySelector('.panel-nav');
    // const menuLinks = document.querySelectorAll('.paner-nav a');
    // menu
    menu.classList.toggle('show');
  };

  return (
    <div className='panel-nav'>
      <div className='Hmenu' onClick={toggleMenu}>
        <i className='fa fa-bars'></i>
      </div>
      <ul>
        <li>
          <button>
            {/* <span className='icon icon-film'></span> */}
            <NavLink to='/profile/bought-courses' className='panel-title'>
              <i className='fa fa-film'></i>
              <p>کلاس های خریداری شده</p>
            </NavLink>
          </button>
        </li>
        <li>
          <button>
            {/* <span className='icon icon-film'></span> */}
            {/* <span className='panel-title'>دوره ها</span> */}
            <NavLink to='/profile/courses' className='panel-title'>
              <i className='fa fa-film'></i>
              <p>دوره ها</p>
            </NavLink>
          </button>
        </li>
        <li>
          <button>
            {/* <span className='icon icon-film'></span> */}
            {/* <span className='panel-title'>سفارش ها</span> */}
            <NavLink to='/profile/orders' className='panel-title'>
              <i className='fa fa-shopping-cart'></i>
              <p>سفارش ها</p>
            </NavLink>
          </button>
        </li>
        <li>
          <button>
            {/* <span className='icon icon-cogs'></span> */}
            {/* <span className='panel-title'>ویرایش حساب</span> */}
            <NavLink to='/profile/edit-account' className='panel-title'>
              <i className='fa fa-edit'></i>
              <p>سفارش ها</p>
            </NavLink>
          </button>
        </li>
        <li>
          <button>
            {/* <span className='icon icon-fire'></span> */}
            {/* <span className='panel-title'>دوره های پیشنهادی </span> */}
            <NavLink to='/profile/suggested-courses' className='panel-title'>
              <i className='fa fa-fire'></i>
              <p>دوره های پیشنهادی</p>
            </NavLink>
          </button>
        </li>
        <li>
          <button onClick={() => dispatch(logoutHandler(history))}>
            <a href=''>
              {/* <span className='icon icon-exit'></span> */}
              <i className='fa fa-sign-out'></i>
              <p>خروج</p>
            </a>
          </button>
        </li>
      </ul>
    </div>
  );
};

export default withRouter(PanelNav);
