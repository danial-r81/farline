import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react/swiper-react.js';
import MediaQuery from 'react-responsive';
import 'swiper/swiper.min.css';
import 'swiper/swiper-bundle.min.css';
import 'swiper/swiper-bundle';
import { Teacher } from './Teacher';
import { motion } from 'framer-motion';
import { NavLink } from 'react-router-dom';

export const TeacherGallery = () => {
  const teachers = [
    // {
    //   name: 'teacher',
    //   lesson: 'زمین شناسی',
    //   image: 'images/teacher.png',
    // },
    {
      name: 'teacher',
      lesson: 'ریاضی',
      image: 'images/teacher.png',
    },
    // {
    //   name: 'teacher',
    //   lesson: 'ریاضی آمار',
    //   image: 'images/teacher.png',
    // },
    {
      name: 'teacher',
      lesson: 'آمار و گسسته',
      image: 'images/teacher.png',
    },
    {
      name: 'teacher',
      lesson: 'فیزیک',
      image: 'images/teacher.png',
    },
    {
      name: 'teacher',
      lesson: 'هندسه',
      image: 'images/teacher.png',
    },
    // {
    //   name: 'teacher',
    //   lesson: 'جامعه شناسی',
    //   image: 'images/teacher.png',
    // },
    // {
    //   name: 'teacher',
    //   lesson: 'زبان',
    //   image: 'images/teacher.png',
    // },
    // {
    //   name: 'teacher',
    //   lesson: 'زیست شناسی',
    //   image: 'images/teacher.png',
    // },
    // {
    //   name: 'teacher',
    //   lesson: 'دین و زندگی',
    //   image: 'images/teacher.png',
    // },
    {
      name: 'teacher',
      lesson: 'فلسفه و منطق',
      image: 'images/teacher.png',
    },
    // {
    //   name: 'teacher',
    //   lesson: 'حسابان',
    //   image: 'images/teacher.png',
    // },
    // {
    //   name: 'teacher',
    //   lesson: 'عربی',
    //   image: 'images/teacher.png',
    // },
    // {
    //   name: 'teacher',
    //   lesson: 'تاریخ و جغرافی',
    //   image: 'images/teacher.png',
    // },
    // {
    //   name: 'teacher',
    //   lesson: 'روانشناسی و اقتصاد',
    //   image: 'images/teacher.png',
    // },
    // {
    //   name: 'teacher',
    //   lesson: 'شیمی',
    //   image: 'images/teacher.png',
    // },
    // {
    //   name: 'teacher',
    //   lesson: 'ادبیات فارسی',
    //   image: 'images/teacher.png',
    // },
    // {
    //   name: 'teacher',
    //   lesson: 'علوم و فنون',
    //   image: 'images/teacher.png',
    // },
  ];

  return (
    <div className='teacher-gallery'>
      <MediaQuery minWidth={1117}>
        <h2 className='teacher-header'>اساتید</h2>
        <Swiper
          slidesPerView={5}
          spaceBetween={30}
          loop={true}
          pagination={{
            clickable: true,
          }}
          navigation={true}
          className='teacher-swiper'>
          {teachers.map((teacher) => (
            <SwiperSlide>
              <Teacher teacher={teacher} />
            </SwiperSlide>
          ))}
        </Swiper>
        <motion.div className='all-courses'>
          <NavLink to='/teachers'>
            <button>برای مشاهده تمامی اساتید کلیک کنید</button>
          </NavLink>
        </motion.div>
      </MediaQuery>
      <MediaQuery maxWidth={1118} minWidth={926}>
        <h2 className='teacher-header'>اساتید</h2>
        <Swiper
          slidesPerView={4}
          spaceBetween={30}
          loop={true}
          pagination={{
            clickable: true,
          }}
          navigation={true}
          className='teacher-swiper'>
          {teachers.map((teacher) => (
            <SwiperSlide>
              <Teacher teacher={teacher} />
            </SwiperSlide>
          ))}
        </Swiper>
        <motion.div className='all-courses'>
          <NavLink to='/teachers'>
            <button>برای مشاهده تمامی اساتید کلیک کنید</button>
          </NavLink>
        </motion.div>
      </MediaQuery>
      <MediaQuery maxWidth={925} minWidth={735}>
        <h2 className='teacher-header'>اساتید</h2>
        <Swiper
          slidesPerView={3}
          spaceBetween={30}
          loop={true}
          pagination={{
            clickable: true,
          }}
          navigation={true}
          className='teacher-swiper'>
          {teachers.map((teacher) => (
            <SwiperSlide>
              <Teacher teacher={teacher} />
            </SwiperSlide>
          ))}
        </Swiper>
        <motion.div className='all-courses'>
          <NavLink to='/teachers'>
            <button>برای مشاهده تمامی اساتید کلیک کنید</button>
          </NavLink>
        </motion.div>
      </MediaQuery>
      <MediaQuery maxWidth={734} minWidth={529}>
        <h2 className='teacher-header'>اساتید</h2>
        <Swiper
          slidesPerView={2}
          spaceBetween={30}
          loop={true}
          pagination={{
            clickable: true,
          }}
          navigation={true}
          className='teacher-swiper'>
          {teachers.map((teacher) => (
            <SwiperSlide>
              <Teacher teacher={teacher} />
            </SwiperSlide>
          ))}
        </Swiper>
        <motion.div className='all-courses'>
          <NavLink to='/teachers'>
            <button>برای مشاهده تمامی اساتید کلیک کنید</button>
          </NavLink>
        </motion.div>
      </MediaQuery>
      <MediaQuery maxWidth={528}>
        <h2 className='teacher-header'>اساتید</h2>
        <Swiper
          slidesPerView={1}
          spaceBetween={30}
          loop={true}
          pagination={{
            clickable: true,
          }}
          navigation={true}
          className='teacher-swiper'>
          {teachers.map((teacher) => (
            <SwiperSlide>
              <Teacher teacher={teacher} />
            </SwiperSlide>
          ))}
        </Swiper>
        <motion.div className='all-courses'>
          <NavLink to='/teachers'>
            <button>برای مشاهده تمامی اساتید کلیک کنید</button>
          </NavLink>
        </motion.div>
      </MediaQuery>
    </div>
  );
};
