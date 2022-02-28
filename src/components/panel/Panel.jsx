import React from 'react';
import { useSelector } from 'react-redux';
import PanelNav from './panel-nav/PanelNav';
import { hamMenuLogo, logo } from '../../assets';
import { Outlet, useLocation, useNavigate } from 'react-router';

import './panel.css';

const Panel = () => {
   const navigate = useNavigate();
   const { pathname } = useLocation();
   const { firstName, lastName } = useSelector(
      (state) => state.userReducer.userInfo
   );

   if (pathname === '/profile') navigate('/profile/dashbord');

   const toggleMenu = () => {
      const main = document.querySelector('.panel-main');
      const menu = document.querySelector('.panel-nav');
      menu.classList.toggle('active');
      main.classList.toggle('active');
   };

   return (
      <div className='panel-contain'>
         <PanelNav />
         <div className='panel-main'>
            <div className='panel-logo'>
               <img src={logo} alt='' />
            </div>
            <div className='panel-bar'>
               <div className='left-bar'>
                  {firstName && lastName ? (
                     <div className='panel-user'>
                        <div className='panel-username'>{`${firstName} ${lastName}`}</div>
                     </div>
                  ) : null}
               </div>
               <div className='Hmenu' onClick={toggleMenu}>
                  <img src={hamMenuLogo} alt='' />
               </div>
            </div>
            <div className='panel-table'>
               <Outlet />
            </div>
         </div>
      </div>
   );
};

export default Panel;
