import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
   getCoursePackAfterRefresh,
   getCoursesItemsHandler,
} from '../../../../../redux/features/courses';
import CoursesItems from '../coursesItems/CoursesItems';
import { RingLoader } from 'react-spinners';

import './course-pack-page.css';
const CoursePackPage = () => {
   const dispatch = useDispatch();
   const { coursePackageItems, coursesItems, packageTitle, loading } =
      useSelector((state) => state.coursesReducer);
   const courseId = localStorage.getItem('course_id');
   const courseItemButtons = document.querySelectorAll('.filter-btn');
   useEffect(() => {
      dispatch(getCoursePackAfterRefresh(courseId));
   }, []);

   courseItemButtons.forEach((button) => {
      button.addEventListener('click', () => {
         for (const btn of courseItemButtons) {
            btn.classList.remove('active');
         }
         button.classList.add('active');
      });
   });

   return (
      <div className='courses-package-container'>
         <div className='package-title'>
            <h3>{packageTitle}</h3>
         </div>
         <div className='filters-tab-bar'>
            <div className='filter-items'>
               {coursePackageItems.map((item, index) => {
                  const courseCode = item.code;
                  return (
                     <div key={courseCode} className='filter-item'>
                        <button
                           className={`filter-btn ${
                              index === 0 ? 'active' : ''
                           }`}
                           onClick={() =>
                              dispatch(getCoursesItemsHandler(courseCode))
                           }>
                           {item.title}
                        </button>
                     </div>
                  );
               })}
            </div>
         </div>
         {loading ? (
            <div className='loader'>
               <RingLoader size={100} color={'#051a1c'} loading={loading} />
            </div>
         ) : (
            <CoursesItems coursesItems={coursesItems} />
         )}
      </div>
   );
};

export default CoursePackPage;
