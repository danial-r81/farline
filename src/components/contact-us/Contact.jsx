import React, { Fragment } from 'react';

import './contact.css';
export const Contact = () => {
  return (
    <Fragment>
      <div class='title'>
        <h1>با ما در ارتباط باشید</h1>
      </div>
      <section class='main-contact'>
        <div class='column part-1'>
          <div class='gmail contact'>
            <i class='fa fa-envelope-open-o'></i>
            <p class='text'>www.toosclass@gmail.com</p>
          </div>
          <div class='phone contact bottom'>
            <i class='fa fa-phone'></i>
            <p class='text'>
              02191301962 <br />
              09196724868
            </p>
          </div>
        </div>
        <div class='column part-2'>
          <div class='web-site contact'>
            <i class='fa fa-google'></i>
            <p class='text'>www.fatahzadehedu.com</p>
          </div>
        </div>
        <div class='column part-3'>
          <div class='instagram contact'>
            <i class='fa fa-instagram'></i>

            <p class='text'>toosclass_com</p>
          </div>
          <div class='telegram contact bottom'>
            <i class='fa fa-telegram'></i>
            <p class='text'>fatahzadehedu_com</p>
          </div>
        </div>
      </section>
    </Fragment>
  );
};
