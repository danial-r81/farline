import React, { Fragment } from 'react';

import './contact.css';
export const Contact = () => {
  return (
    <Fragment>
      <div className='title'>
        <h1>با ما در ارتباط باشید</h1>
      </div>
      <section className='main-contact'>
        <div className='column part-1'>
          <div className='gmail contact'>
            <i className='fa fa-envelope-open-o'></i>
            <p className='text'>www.toosclassName@gmail.com</p>
          </div>
          <div className='phone contact bottom'>
            <i className='fa fa-phone'></i>
            <p className='text'>
              02191301962 <br />
              09196724868
            </p>
          </div>
        </div>
        <div className='column part-2'>
          <div className='web-site contact'>
            <i className='fa fa-globe'></i>
            <p className='text'>www.fatahzadehedu.com</p>
          </div>
        </div>
        <div className='column part-3'>
          <div className='instagram contact'>
            <i className='fa fa-instagram'></i>

            <p className='text'>toosclassName_com</p>
          </div>
          <div className='telegram contact bottom'>
            <i className='fa fa-telegram'></i>
            <p className='text'>fatahzadehedu_com</p>
          </div>
        </div>
      </section>
    </Fragment>
  );
};
