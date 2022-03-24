import React from 'react';

const NewsCourses = ({ course }) => {
   console.log(course);
   return (
      <div className='box-container'>
         <div className='box-course-1'>
            <div className='img-box'>
               <img src='images/1.png' alt='' />
            </div>
            <div className='detail-course-box'>
               <div className='detail-course-box-1'>
                  <h2>{course.title_persion}</h2>
                  <h2>{course.teacher_name}</h2>
               </div>
               <div className='detail-course-box-2'>
                  <h3>{course.price}</h3>
               </div>
            </div>
         </div>
      </div>
   );
};

export default NewsCourses;
