import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import {
   getCourseAfterRefresh,
   getCourseSessionsHandler,
} from '../../../../../redux/features/courses';
import { addCourseToCartHandler } from '../../../../../redux/features/cart';

import './course-page.css';
const CoursePage = () => {
   const dispatch = useDispatch();
   const { course, courseSessions } = useSelector(
      (state) => state.coursesReducer
   );
   const phoneNumber = localStorage.getItem('phoneNumber');
   const code = localStorage.getItem('course_code');
   console.log(phoneNumber);
   console.log(code);
   console.log(courseSessions);

   useEffect(() => {
      dispatch(getCourseAfterRefresh(localStorage.getItem('course_code')));
      dispatch(getCourseSessionsHandler(code));
   }, []);

   return (
      <div className='courses-item-container'>
         <section className='course-item-right'>
            <div className='course-item-detail'>
               <div className='detail-price'>
                  <i className='fa fa-android'></i>
                  <span>قیمت این دوره : {course.price} تومان</span>
               </div>
               <div className='border-price'></div>
               <div className='ditails-courses'>
                  <div className='ditail-name-course'>
                     <i className='fa fa-android'></i>
                     <span> نام دوره : {course.title_persion}</span>
                  </div>
                  <div className='ditail-teacher'>
                     <i className='fa fa-android'></i>
                     <span>مدرس دوره : {course.teacher_name}</span>
                  </div>
                  <div className='ditail-number'>
                     <i className='fa fa-android'></i>
                     <span>تعداد قسمت‌ها : {course.count_session}</span>
                  </div>
                  <div className='ditail-time'>
                     <i className='fa fa-android'></i>
                     <span>مدت زمان دوره : {course.time}</span>
                  </div>
               </div>
               <div
                  className='ditail-buy-course'
                  onClick={() =>
                     dispatch(addCourseToCartHandler({ phoneNumber, code }))
                  }>
                  <button>خرید دوره</button>
               </div>
            </div>
         </section>
         <section className='course-item-left'>
            <div className='course-item-content-top'>
               <div className='item-video'>
                  {/* <video
                     controls
                     poster='photo/Slide1.PNG'
                     src={courseSessions[0].text}></video> */}
               </div>
               <div className='item-description'>
                  <h3>موضوع جلسه مورد نظر</h3>
                  <span>
                     لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ،
                     و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه
                     روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای
                     شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف
                     بهبود ابزارهای کاربردی می باشد، کتابهای زیادی در شصت و سه
                     درصد گذشته حال و آینده، شناخت فراوان جامعه و متخصصان را می
                     طلبد، تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه
                     ای علی الخصوص طراحان خلاقی، و فرهنگ پیشرو در زبان فارسی
                     ایجاد کرد، در این صورت می توان امید داشت که تمام و دشواری
                     موجود در ارائه راهکارها، و شرایط سخت تایپ به پایان رسد و
                     زمان مورد نیاز شامل حروفچینی دستاوردهای اصلی، و جوابگوی
                     سوالات پیوسته اهل دنیای موجود طراحی اساسا مورد استفاده قرار
                     گیرد.
                  </span>
               </div>
            </div>
            <ul className='course-item-content-bottom'>
               <li className='item-ditail-sessions'>
                  <div className='ditail-sessions-right'>
                     <div className='session-number'>
                        <div className='number-circle'>1</div>
                     </div>
                     <div className='session-title'>
                        <h3>موضوع قسمت</h3>
                     </div>
                  </div>
                  <div className='ditail-sessions-left'>
                     <div className='session-time'>
                        <h3>00 : 00</h3>
                     </div>
                     <div className='session-play'>
                        <div className='play-icon'>
                           <i className='fa fa-play'></i>
                        </div>
                     </div>
                  </div>
               </li>
            </ul>
         </section>
      </div>
   );
};

export default CoursePage;
