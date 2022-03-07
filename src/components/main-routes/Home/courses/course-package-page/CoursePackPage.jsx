import React from 'react';

import './course-pack-page.css';
const CoursePackPage = () => {
   return (
      <div className='courses-package-container'>
         <div className='package-title'>
            <h3>پکیج آموزش کنکور</h3>
         </div>
         <div className='filters-tab-bar'>
            <div className='filter-items'>
               <div className='filter-item'>
                  <button>همایش</button>
               </div>
               <div className='filter-item'>
                  <button>همایش</button>
               </div>
               <div className='filter-item'>
                  <button>همایش</button>
               </div>
            </div>
         </div>
      </div>
   );
};

export default CoursePackPage;
