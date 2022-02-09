import React, { Fragment } from 'react';

import './contact.css';
import ContactBox from './ContactBox';
const Contact = () => {
  return (
    <div className='contact-us-container'>
      <div className='title'>
        <h1>با ما در ارتباط باشید</h1>
      </div>
      <section className='main-contact'>
        <div className='column part-1'>
          <ContactBox
            className='gmail'
            transitionDelay={0.4}
            initial={{ x: '10vw', opacity: 0 }}
            animate={{ x: '0', opacity: 1 }}
            icon='fa fa-envelope-open-o'
            text='toosclass@gmail.com'
          />
          <ContactBox
            className='phone'
            transitionDelay={0.7}
            initial={{ x: '10vw', opacity: 0 }}
            animate={{ x: '0', opacity: 1 }}
            icon='fa fa-phone'
            text={
              <Fragment>
                02191301962 <br /> 09196724868
              </Fragment>
            }
          />
        </div>
        <div className='column part-2'>
          <ContactBox
            className='web-site'
            transitionDelay={1.4}
            initial={{ y: '-10vh', opacity: 0 }}
            animate={{ y: '0', opacity: 1 }}
            icon='fa fa-globe'
            text='www.fatahzadehedu.com'
          />
        </div>
        <div className='column part-3'>
          <ContactBox
            className='instagram'
            transitionDelay={0.9}
            initial={{ x: '-10vw', opacity: 0 }}
            animate={{ x: '0', opacity: 1 }}
            icon='fa fa-instagram'
            text='toosclass_com'
          />
          <ContactBox
            className='telegram bottom'
            transitionDelay={1.1}
            initial={{ x: '-10vw', opacity: 0 }}
            animate={{ x: '0', opacity: 1 }}
            icon='fa fa-telegram'
            text='fatahzadehedu_com'
          />
        </div>
      </section>
    </div>
  );
};

export default Contact;
