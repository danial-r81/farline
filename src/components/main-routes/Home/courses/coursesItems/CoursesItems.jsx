import React from 'react';
import CourseBox from '../../../../course-box/CourseBox';
import CourseItemBox from '../courses-packages/CourseItemBox';

import './course-items.css';
import CourseItem from './CourseItem';
const CoursesItems = ({ coursesItems }) => {
   const CoursesContainer = () => (
      <section className='main-box-courses'>
         {coursesItems.map((item, index) => {
            console.log(item);
            return <CourseBox course={item} key={index} />;
         })}
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
