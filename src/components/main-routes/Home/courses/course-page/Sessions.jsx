import React from 'react';

const Sessions = ({ session }) => {
   const accor = document.querySelectorAll('.ourse-session-container');
   accor.forEach((item) => {
      item.addEventListener('click', function () {
         item.classList.toggle('active');
         const content = item.nextElementSibling;
         if (content.style.height) {
            content.style.height = null;
         } else {
            content.style.height = content.scrollHeight + 'px';
         }
      });
   });
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
               <h3>00:00:00</h3>
            </div>
            <div class='course-sessions-icon'>
               <i class='bi bi-chevron-down'></i>
            </div>
         </div>
      </div>
   );
};

export default Sessions;
