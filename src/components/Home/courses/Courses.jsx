import React, { Fragment, useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react/swiper-react.js';
import SwiperCore, { Pagination, Navigation } from 'swiper';
import MediaQuery from 'react-responsive';
import { motion } from 'framer-motion';
import 'swiper/swiper.min.css';
import 'swiper/swiper-bundle.min.css';
import 'swiper/swiper-bundle';
import { Topic } from '../../courses/Topic';
import { Course } from './Course';
import { NavLink } from 'react-router-dom';
import http from '../../../services/httpService';
import config from '../../../services/config.json';

SwiperCore.use([Pagination, Navigation]);

export const Courses = () => {
  const [courses, setCourses] = useState([]);
  useEffect(() => {
    http
      .get(`${config.baseUrl}/api/kinds/`)
      .then((res) => {
        console.log(res);
        setCourses(res.data);
      })
      .catch((er) => console.log(er));
  }, []);

  return (
    <Fragment>
      <MediaQuery minWidth={1000}>
        <div className='home-courses'>
          <h2>دوره های آموزشی</h2>
          <Swiper
            slidesPerView={3}
            spaceBetween={30}
            slidesPerGroup={3}
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
      <MediaQuery maxWidth={999} minWidth={721}>
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
