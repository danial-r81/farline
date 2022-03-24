import React from 'react';
import { useDispatch } from 'react-redux';
import { useLocation, useNavigate } from 'react-router';
import { getCourseHandler } from '../../redux/features/courses';
import config from '../../services/config.json';

const CourseBox = ({ course }) => {
   console.log(course);
   const navigate = useNavigate();
   const dispatch = useDispatch();
   const code = course.code;
   const { pathname } = useLocation();
   return (
      <div
         className='my-courses-box'
         onClick={() => dispatch(getCourseHandler({ navigate, code }))}>
         <div className='my-course-img'>
            <img src={`${config.baseUrl}${course.picture}`} alt='' />
         </div>
         <div className='my-course-name'>
            <p>{course.title_persion}</p>
         </div>
         <div className='my-course-teacher-name'>
            <p>{course.teacher_name}</p>
         </div>
         {!pathname === '/profile/my-courses' ? (
            <div className='my-course-price'>
               <p>{course.price}</p>
            </div>
         ) : null}
      </div>
   );
};

export default CourseBox;
