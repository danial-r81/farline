import React from 'react';

export const PanelNav = () => {
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
          <a href='#'>
            {/* <span className='icon icon-film'></span> */}
            <i className='fa fa-film'></i>
            <span className='panel-title'>کلاس های خریداری شده</span>
          </a>
        </li>
        <li>
          <a href='#'>
            {/* <span className='icon icon-film'></span> */}
            <i className='fa fa-shopping-cart'></i>
            <span className='panel-title'>سفارش ها</span>
          </a>
        </li>
        <li>
          <a href='#'>
            {/* <span className='icon icon-cogs'></span> */}
            <i className='fa fa-edit'></i>
            <span className='panel-title'>ویرایش حساب</span>
          </a>
        </li>
        <li>
          <a href='#'>
            {/* <span className='icon icon-user'></span> */}
            <i className='fa fa-user'></i>
            <span className='panel-title'>پشتیبانی</span>
          </a>
        </li>
        <li>
          <a href='#'>
            {/* <span className='icon icon-fire'></span> */}
            <i className='fa fa-fire'></i>
            <span className='panel-title'>دوره های پیشنهادی </span>
          </a>
        </li>
        <li>
          <a href='#'>
            {/* <span className='icon icon-exit'></span> */}
            <i className='fa fa-sign-out'></i>
            <span className='panel-title'>خروج</span>
          </a>
        </li>
      </ul>
    </div>
  );
};
