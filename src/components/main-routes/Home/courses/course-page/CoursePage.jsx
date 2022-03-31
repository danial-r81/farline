import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import {
   getCourseAfterRefresh,
   getCourseSessionsHandler,
} from '../../../../../redux/features/courses';
import { addCourseToCartHandler } from '../../../../../redux/features/cart';

import './course-page.css';
import Sessions from './Sessions';
const CoursePage = () => {
   const dispatch = useDispatch();
   const { course, courseSessions } = useSelector((state) => state.courses);
   const phoneNumber = localStorage.getItem('phoneNumber');
   const code = localStorage.getItem('course_code');
   console.log(courseSessions);
   console.log(course);

   useEffect(() => {
      dispatch(getCourseAfterRefresh(localStorage.getItem('course_code')));
      dispatch(getCourseSessionsHandler(code));
   }, []);

   return (
      <div class='course-container'>
         <div class='course-info'>
            <div class='course-img'>
               <img src='../../images/1.png' alt='' />
            </div>
            <div class='course-info-text'>
               <p>
                  لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و
                  با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و
                  مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی
                  تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای
                  کاربردی می باشد، کتابهای زیادی در شصت و سه درصد گذشته حال و
                  آینده، شناخت فراوان جامعه و متخصصان را می طلبد، تا با نرم
                  افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص
                  طراحان خلاقی، و فرهنگ پیشرو در زبان فارسی ایجاد کرد، در این
                  صورت می توان امید داشت که تمام و دشواری موجود در ارائه
                  راهکارها، و شرایط سخت تایپ به پایان رسد و زمان مورد نیاز شامل
                  حروفچینی دستاوردهای اصلی، و جوابگوی سوالات پیوسته اهل دنیای
                  موجود طراحی اساسا مورد استفاده قرار گیرد.{' '}
               </p>
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
               {/* <!-- <div class="course-info-price">

                </div> --> */}
               <button
                  onClick={() =>
                     dispatch(addCourseToCartHandler({ code, phoneNumber }))
                  }>
                  خرید دوره
               </button>
            </div>

            <div class='course-sessions'>
               {courseSessions.map((session) => (
                  <Sessions session={session} />
               ))}
            </div>
         </div>
      </div>
   );
};

export default CoursePage;
