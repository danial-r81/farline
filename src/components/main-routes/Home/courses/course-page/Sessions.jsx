import React from 'react';
import { BiArrowFromTop } from 'react-icons/bi';

const Sessions = ({ session }) => {
   // const accor = document.querySelectorAll('.course-session-container');
   // accor.forEach((item) => {
   //    item.addEventListener('click', function () {
   //       item.classList.toggle('active');
   //       const content = item.nextElementSibling;
   //       if (content.style.height) {
   //          content.style.height = null;
   //       } else {
   //          content.style.height = content.scrollHeight + 'px';
   //       }
   //    });
   // });
   return (
      <div class='course-session-container'>
         <div class='course-session-container-num'>
            <div class='circle-course'>
               <h2>{session.title}</h2>
            </div>
            <div class='course-title'>
               <h2>{session.text}</h2>
            </div>
         </div>
         <div class='course-session-container-timer'>
            <div class='course-sessions-timer'>
               <h3>{session.time}</h3>
            </div>
            <div class='course-sessions-icon'>
               <BiArrowFromTop />
            </div>
         </div>
      </div>
   );
};

export default Sessions;
