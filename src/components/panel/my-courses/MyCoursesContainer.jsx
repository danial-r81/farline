import React, { useEffect } from 'react';

import './my-courses.css';
import { useDispatch, useSelector } from 'react-redux';
import { getMyCoursesHandlerAfterRefresh } from '../../../redux/features/courses';
import CourseBox from '../../course-box/CourseBox';
const MyCoursesContainer = () => {
   const dispatch = useDispatch();
   const phoneNumber = localStorage.getItem('phoneNumber');
   const { myCourses } = useSelector((state) => state.courses);

   useEffect(() => {
      dispatch(getMyCoursesHandlerAfterRefresh(phoneNumber));
   }, []);

   return (
      <div className='my-courses-container'>
         <div className='my-courses'>
            {myCourses.map((course, key) => (
               <CourseBox course={course} key={key} />
            ))}
         </div>
      </div>
   );
};

export default MyCoursesContainer;
