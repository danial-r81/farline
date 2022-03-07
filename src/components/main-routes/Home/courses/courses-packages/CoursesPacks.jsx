import React from 'react';
import { useSelector } from 'react-redux';
import CourseItemBox from './CourseItemBox';

import './course-packs.css';
const CoursesPacks = () => {
   const { coursePackages } = useSelector((state) => state.coursesReducer);
   console.log(coursePackages);
   return (
      <div className='courses-boxes-container'>
         <div className='courses-boxes-title'>
            <h3>پکیج های آموزشی فرتاک</h3>
         </div>
         <div className='courses-boxes'>
            {coursePackages.map((courseItem) => (
               <CourseItemBox item={courseItem} />
            ))}
         </div>
      </div>
   );
};

export default CoursesPacks;
