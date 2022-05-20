import React, { useEffect } from 'react';
import { BiArrowFromTop, BiLockAlt, BiLockOpenAlt } from 'react-icons/bi';
import Toast from '../../../../../toasts/toasts';

const Sessions = ({ session, active, setActive, isFree }) => {
   const toggleSession = () => {
      if (isFree) {
         active === session.text ? setActive('') : setActive(session.text);
      } else {
         Toast.toastError('شما این دوره را خریداری نکرده اید.');
      }
   };

   return (
      <div
         className={`${
            isFree ? 'accordion-container free' : 'accordion-container'
         }`}>
         <div className='accordion-header'>
            <div className='accordion-right'>
               <div className='session-num'>
                  <div>{session.title}</div>
               </div>
               <div className='session-title'>
                  <p>{session.text}</p>
                  {!isFree ? <BiLockAlt /> : <BiLockOpenAlt />}
               </div>
            </div>
            <div className='accordion-left'>
               <div className='session-time'>{session.time}</div>
               <BiArrowFromTop onClick={toggleSession} />
            </div>
         </div>
         <div
            className={`${
               active === session.text ? 'show-accor' : ''
            } accordion-content`}>
            <div className='session-video'>
               <video controls controlsList='nodownload'>
                  <source src={session.link} />
               </video>
            </div>
         </div>
      </div>
   );
};

export default Sessions;
