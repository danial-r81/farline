import React from 'react';
import { useSelector } from 'react-redux';
import CourseItemBox from './CourseItemBox';

import './course-packs.css';
const CoursesPacks = () => {
   const { coursePackages } = useSelector((state) => state.courses);
   return (
      <div className='courses-boxes-container'>
         <div className='courses-boxes-title'>
            <h3>پکیج های آموزشی فرلاین</h3>
         </div>
         <div className='courses-boxes'>
            {coursePackages?.map((courseItem, index) => (
               <CourseItemBox key={index} item={courseItem} />
            ))}
         </div>
      </div>
   );
};

export default CoursesPacks;
