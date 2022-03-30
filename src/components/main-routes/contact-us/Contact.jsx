import React, { Fragment } from 'react';
import {
   BsFillEnvelopeFill,
   BsTelegram,
   BsInstagram,
   BsPhone,
   BsFillTelephoneFill,
} from 'react-icons/bs';
import { AiOutlineGlobal } from 'react-icons/ai';

import './contact.css';
import ContactBox from './ContactBox';
const Contact = () => {
   return (
      <div className='contact-us-container'>
         <div className='title'>
            <h1>...با ما در ارتباط باشید</h1>
         </div>
         <section className='main-contact'>
            <div className='column part-1'>
               <ContactBox
                  className='gmail'
                  transitionDelay={0.4}
                  initial={{ x: '10vw', opacity: 0 }}
                  animate={{ x: '0', opacity: 1 }}
                  icon={<BsFillEnvelopeFill />}
                  text='toosclass@gmail.com'
               />
               <ContactBox
                  className='phone'
                  transitionDelay={0.7}
                  initial={{ x: '10vw', opacity: 0 }}
                  animate={{ x: '0', opacity: 1 }}
                  icon={<BsFillTelephoneFill />}
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
                  icon={<AiOutlineGlobal />}
                  text='www.fatahzadehedu.com'
               />
            </div>
            <div className='column part-3'>
               <ContactBox
                  className='instagram'
                  transitionDelay={0.9}
                  initial={{ x: '-10vw', opacity: 0 }}
                  animate={{ x: '0', opacity: 1 }}
                  icon={<BsInstagram />}
                  text='toosclass_com'
               />
               <ContactBox
                  className='telegram bottom'
                  transitionDelay={1.1}
                  initial={{ x: '-10vw', opacity: 0 }}
                  animate={{ x: '0', opacity: 1 }}
                  icon={<BsTelegram />}
                  text='fatahzadehedu_com'
               />
            </div>
         </section>
      </div>
   );
};

export default Contact;
