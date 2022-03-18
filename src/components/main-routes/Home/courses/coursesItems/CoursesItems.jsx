import React from 'react';

import './course-items.css';
import CourseItem from './CourseItem';
const CoursesItems = ({ coursesItems }) => {
   const CoursesContainer = () => (
      <section className='main-box-courses'>
         {coursesItems.map((item, index) => (
            <CourseItem item={item} key={index} />
         ))}
      </section>
   );

   const EmptyCourses = () => (
      <div className='empty-courses'>
         <h3>دوره های از این مبحث موجود نمی باشد</h3>
      </div>
   );

   return (
      <>{coursesItems.length !== 0 ? <CoursesContainer /> : <EmptyCourses />}</>
   );
};

export default CoursesItems;
