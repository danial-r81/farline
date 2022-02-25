import React from 'react';
import { useSelector } from 'react-redux';
import PanelNav from './panel-nav/PanelNav';
import { PanelRoutes } from './PanelLayout/PanelRoutes';
import CartLogo from '../../assets/cart.png';
import { hamMenuLogo, logo } from '../../assets';
import { Link } from 'react-router-dom';

import './panel.css';

const Panel = () => {
   const { firstName, lastName } = useSelector(
      (state) => state.userReducer.userInfo
   );

   let menu = document.querySelector('.Hmenu');
   let nav = document.querySelector('.panel-nav');
   let main = document.querySelector('.panel-main');

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

                  {/* <div className='cart' as={Link} to='/profile/cart'>
                     <Link to='/profile/cart'>
                        <img src={CartLogo} alt='' />
                     </Link>
                  </div> */}
               </div>
               <div className='Hmenu' onClick={toggleMenu}>
                  <img src={hamMenuLogo} alt='' />
               </div>
            </div>
            <div className='panel-table'>
               <PanelRoutes />
            </div>
         </div>
      </div>
   );
};

export default Panel;
