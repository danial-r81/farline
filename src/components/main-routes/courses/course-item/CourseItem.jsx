import React from 'react';
import config from '../../../../services/config.json';

const CourseItem = ({ course }) => {
   console.log(course);
   return (
      <div className='item-course'>
         <div className='internal-items'>
            <img
               src={`${config.baseUrl}${course.picture}`}
               className='course-img'
            />
         </div>
         <h3>{course.title_persion}</h3>
      </div>
   );
};

export default CourseItem;
