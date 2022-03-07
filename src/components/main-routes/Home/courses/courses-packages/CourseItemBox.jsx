import React from 'react';
import { Link } from 'react-router-dom';

const CourseItemBox = ({ item }) => {
   console.log(item);
   return (
      <Link className='course-box' to='/courses/پکیج-دوره-های-کنکور'>
         <div className='course-box-img'>
            <img src='images/courses/ensani.png' alt='' />
         </div>
         <div className='course-box-text'>
            <p> {item.show_title}</p>
         </div>
      </Link>
   );
};

export default CourseItemBox;
