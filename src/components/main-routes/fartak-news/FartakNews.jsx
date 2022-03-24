import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getNewsCoursesHandler } from '../../../redux/features/courses';

import './fartak-news.css';
import NewsCourses from './NewsCourses';
const FartakNews = () => {
   const dispatch = useDispatch();
   const { newsCourses } = useSelector((state) => state.courses);
   // console.log(newsCourses);

   useEffect(() => {
      dispatch(getNewsCoursesHandler());
   }, []);

   return (
      <div className='cuorse-container'>
         <div className='title-cuorse'>
            <h2>دوره های جدید فرتاک </h2>
         </div>
         <div className='box-cuorse-container'>
            {/* {newsCourses.map((course) => (
               <NewsCourses course={course} />
            ))} */}
         </div>
      </div>
   );
};

export default FartakNews;
