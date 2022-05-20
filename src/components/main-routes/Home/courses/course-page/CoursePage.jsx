import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Sessions from './Sessions';
import {
   getCourseAfterRefresh,
   getCourseSessionsHandler,
   isCourseBoughtHandler,
} from '../../../../../redux/features/courses';
import { addCourseToCartHandler } from '../../../../../redux/features/cart';
import { BsCheckAll } from 'react-icons/bs';
import config from '../../../../../services/config.json';

import './course-page.css';
const CoursePage = () => {
   const [active, setActive] = useState('');
   const dispatch = useDispatch();
   const { course, courseSessions, isFree } = useSelector(
      (state) => state.courses
   );
   const phoneNumber = localStorage.getItem('phoneNumber');
   const code = localStorage.getItem('course_code');

   useEffect(() => {
      dispatch(getCourseAfterRefresh(localStorage.getItem('course_code')));
      dispatch(getCourseSessionsHandler(code));
      dispatch(isCourseBoughtHandler({ phoneNumber, code }));
   }, []);

   return (
      <div class='course-container'>
         <div class='course-info'>
            <div class='course-img'>
               <img src={`${config.baseUrl}${course.picture}`} alt='' />
            </div>
            <div class='course-info-text'>
               <p>{course.Text}</p>
            </div>
         </div>
         <div class='course-data'>
            <div class='course-price'>
               <div class='course-detils'>
                  <h2>
                     نام دوره : <span> {course.title_persion} </span>
                  </h2>

                  <h2>
                     مدرس دوره: <span> {course.teacher_name}</span>
                  </h2>

                  <h2>
                     تعداد قسمت: <span>{course.count_session} </span>
                  </h2>

                  <h2>
                     مدت زمان دوره: <span>{course.time}</span>
                  </h2>

                  <h2>
                     دانشجوهای ثبت نام کرده: <span> {course.count_user}</span>
                  </h2>

                  <h2>
                     قیمت دوره : <span> {course.price} </span>تومان
                  </h2>
               </div>
               {!isFree ? (
                  <button
                     onClick={() =>
                        dispatch(addCourseToCartHandler({ code, phoneNumber }))
                     }>
                     خرید دوره
                  </button>
               ) : (
                  <div className='free-course'>
                     <p>.شما این دوره را خریده اید</p>
                     <BsCheckAll />
                  </div>
               )}
            </div>

            {/* ====== Sessions ====== */}
            <div class='course-sessions'>
               {courseSessions.map((session) => (
                  <Sessions
                     session={session}
                     active={active}
                     setActive={setActive}
                     isFree={isFree ? isFree : session.is_free}
                  />
               ))}
            </div>
         </div>
      </div>
   );
};

export default CoursePage;
