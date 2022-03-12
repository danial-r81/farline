import React from 'react';
import { useSelector } from 'react-redux';
import { ScaleLoader } from 'react-spinners';

import './course-items.css';
import CourseItem from './CourseItem';
const CoursesItems = ({ coursesItems }) => {
   const { loading } = useSelector((state) => state.coursesReducer);
   const CoursesContainer = () => (
      <section className='main-box-courses'>
         {coursesItems.map((item) => (
            <CourseItem item={item} />
         ))}
      </section>
   );

   const EmptyCourses = () => (
      <div className='empty-courses'>
         <h3>دوره های از این مبحث موجود نمی باشد</h3>
      </div>
   );

   console.log(coursesItems);
   return (
      <>{coursesItems.length !== 0 ? <CoursesContainer /> : <EmptyCourses />}</>
   );
};

export default CoursesItems;
