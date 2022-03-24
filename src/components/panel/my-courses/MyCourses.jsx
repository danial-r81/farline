import React from 'react';
import config from '../../../services/config.json';

const MyCoursesBox = ({ course }) => {
   console.log(course);
   return (
      <div className='my-courses-box'>
         <div className='my-course-img'>
            <img src={`${config.baseUrl}${course.picture}`} alt='' />
         </div>
         <div className='my-course-name'>
            <p>{course.title_persion}</p>
         </div>
         <div className='my-course-teacher-name'>
            <p>{course.teacher_name}</p>
         </div>
      </div>
   );
};

export default MyCoursesBox;
