import { useDispatch } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { logoutHandler } from '../../../redux/features/userInfo';
import { withRouter } from 'react-router-dom';

const PanelNav = ({ history }) => {
  const dispatch = useDispatch();
  const toggleMenu = () => {
    const menu = document.querySelector('.panel-nav');
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
              <i className='	fa fa-coffee'></i>
              <p>میز مطالعه</p>
            </NavLink>
          </button>
        </li>
        <li>
          <button>
            {/* <span className='icon icon-film'></span> */}
            {/* <span className='panel-title'>دوره ها</span> */}
            <NavLink to='/profile/courses' className='panel-title'>
              <i className='	fa fa-book'></i>
              <p>درس های من</p>
            </NavLink>
          </button>
        </li>
        <li>
          <button>
            {/* <span className='icon icon-cogs'></span> */}
            {/* <span className='panel-title'>ویرایش حساب</span> */}
            <NavLink to='/profile/edit-account' className='panel-title'>
              <i className='fa fa-edit'></i>
              <p>تغییر رمز عبور</p>
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
            <a href='' onClick={(e) => e.preventDefault()}>
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
