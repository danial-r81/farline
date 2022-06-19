import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getNewsCoursesHandler } from '../../../redux/features/courses';
import CourseBox from '../../course-box/CourseBox';

import './fartak-news.css';
const FartakNews = () => {
   const dispatch = useDispatch();
   const { newsCourses } = useSelector((state) => state.courses);

   useEffect(() => {
      dispatch(getNewsCoursesHandler());
   }, []);

   return (
      <div className='cuorse-container'>
         <div className='title-cuorse'>
            <h2>دوره های جدید فرلاین </h2>
         </div>
         <div className='box-cuorse-container'>
            {newsCourses.map((course) => (
               <CourseBox course={course} />
            ))}
         </div>
      </div>
   );
};

export default FartakNews;
