import { Fragment, useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react/swiper-react.js';
import SwiperCore, { Pagination, Navigation } from 'swiper';
import MediaQuery from 'react-responsive';
import { motion } from 'framer-motion';
import { Topic } from '../../courses/Topic';
import { NavLink } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { coursesKinds } from '../../../redux/features/courses';

import 'swiper/swiper.min.css';
import 'swiper/swiper-bundle.min.css';
import 'swiper/swiper-bundle';
SwiperCore.use([Pagination, Navigation]);

export const Courses = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(coursesKinds());
  }, []);

  const courses = useSelector((state) => state.coursesReducer.courses);

  return (
    <Fragment>
      <MediaQuery minWidth={1100}>
        <div className='home-courses'>
          <h2>دوره های آموزشی</h2>
          <Swiper
            slidesPerView={4}
            spaceBetween={30}
            slidesPerGroup={4}
            loop={true}
            loopFillGroupWithBlank={true}
            pagination={{
              clickable: true,
            }}
            navigation={true}
            className='mySwiper'>
            {courses.map((course) => (
              <SwiperSlide>
                <Topic course={course} />
              </SwiperSlide>
            ))}
          </Swiper>
          <motion.div className='all-courses'>
            <NavLink to='/courses'>
              <button>برای مشاهده تمامی دوره ها کلیک کنید</button>
            </NavLink>
          </motion.div>
        </div>
      </MediaQuery>
      <MediaQuery maxWidth={1099} minWidth={721}>
        <div className='home-courses'>
          <h2>دوره های آموزشی</h2>
          <Swiper
            slidesPerView={2}
            spaceBetween={30}
            slidesPerGroup={2}
            loop={true}
            loopFillGroupWithBlank={true}
            pagination={{
              clickable: true,
            }}
            navigation={true}
            className='mySwiper'>
            {courses.map((course) => (
              <SwiperSlide>
                <Topic course={course} />
              </SwiperSlide>
            ))}
          </Swiper>
          <motion.div className='all-courses'>
            <NavLink to='/courses'>
              <button>برای مشاهده تمامی دوره ها کلیک کنید</button>
            </NavLink>
          </motion.div>
        </div>
      </MediaQuery>
      <MediaQuery maxWidth={720}>
        <div className='home-courses'>
          <h2>دوره های آموزشی</h2>
          <Swiper
            slidesPerView={1}
            spaceBetween={30}
            slidesPerGroup={1}
            loop={true}
            loopFillGroupWithBlank={true}
            pagination={{
              clickable: true,
            }}
            navigation={true}
            className='mySwiper'
            style={{ margin: '3rem 6rem' }}>
            {courses.map((course) => (
              <SwiperSlide>
                <Topic course={course} />
              </SwiperSlide>
            ))}
          </Swiper>
          <motion.div className='all-courses'>
            <NavLink to='/courses'>
              <button>برای مشاهده تمامی دوره ها کلیک کنید</button>
            </NavLink>
          </motion.div>
        </div>
      </MediaQuery>
    </Fragment>
  );
};
