import React from 'react';

const Sessions = () => {
   return (
      <div class='course-session-container'>
         <div class='course-session-container-num'>
            <div class='circle-course'>
               <h2>1</h2>
            </div>
            <div class='course-title'>
               <h2>جلسه اول</h2>
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
