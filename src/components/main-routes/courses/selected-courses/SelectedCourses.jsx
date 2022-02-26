import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import CourseItem from '../course-item/CourseItem';
import { getCourses } from '../../../../redux/features/courses';

import './selected-courses.css';
const SelectedCourses = () => {
   const dispatch = useDispatch();
   const { courses } = useSelector((state) => state.coursesReducer);
   console.log(courses);
   const topic = localStorage.getItem('t');
   const grade = localStorage.getItem('g');

   return (
      <main className='course-container'>
         <div className='title-course-content'>
            <div className='title-course'>
               <h2>دروس تخصصی ریاضی</h2>
            </div>
         </div>
         <section className='course-part'>
            {courses?.map((course) => (
               <CourseItem course={course} />
            ))}
         </section>
      </main>
   );
};

export default SelectedCourses;
