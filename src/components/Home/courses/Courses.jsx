import React, { Fragment } from 'react';
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

SwiperCore.use([Pagination, Navigation]);

export const Courses = () => {
  const courses = [
    // {
    //   name: 'zaminshenasi',
    //   name_farsi: 'زمین شناسی',
    //   image: 'images/Slide1.png',
    // },
    {
      name: 'math-tajrobi',
      name_farsi: 'ریاضیات تجربی',
      image: 'images/Zist.jpg',
    },
    {
      name: 'amar',
      name_farsi: 'ریاضی آمار',
      image: 'images/Tarahi_site.jpg',
    },
    {
      name: 'amar-gosaste',
      name_farsi: 'آمار و گسسته',
      image: 'images/Tarahi_site.jpg',
    },
    {
      name: 'fizics',
      name_farsi: 'فیزیک',
      image: 'images/Slide5.png',
    },
    {
      name: 'hendese',
      name_farsi: 'هندسه',
      image: 'images/Tarahi_site.jpg',
    },
    // {
    //   name: 'jameshenasi',
    //   name_farsi: 'جامعه شناسی',
    //   image: 'images/Slide7.png',
    // },
    // {
    //   name: 'zaban',
    //   name_farsi: 'زبان انگلیسی',
    //   image: 'images/Slide8.png',
    // },
    {
      name: 'zist',
      name_farsi: 'زیست شناسی',
      image: 'images/Tarahi_site.jpg',
    },
    // {
    //   name: 'dini',
    //   name_farsi: 'دین و زندگی',
    //   image: 'images/Slide10.png',
    // },
    {
      name: 'falsafe',
      name_farsi: 'فلسفه و منطق',
      image: 'images/Tarahi_site.jpg',
    },
    // {
    //   name: 'hesaban',
    //   name_farsi: 'حسابان',
    //   image: 'images/Slide12.png',
    // },
    {
      name: 'arabi',
      name_farsi: 'عربی',
      image: 'images/Tarahi_site.jpg',
    },
    // {
    //   name: 'history-geography',
    //   name_farsi: 'تاریخ و جغرافی',
    //   image: 'images/Slide14.png',
    // },
    // {
    //   name: 'ravan-eghtesad',
    //   name_farsi: 'روان شناسی و اقتصاد',
    //   image: 'images/Slide15.png',
    // },
    {
      name: 'shimi',
      name_farsi: 'شیمی',
      image: 'images/Tarahi_site.jpg',
    },
    // {
    //   name: 'farsi',
    //   name_farsi: 'ادبیات فارسی',
    //   image: 'images/Slide17.png',
    // },
    // {
    //   name: 'olum-fonun',
    //   name_farsi: 'علوم و فنون',
    //   image: 'images/Slide18.png',
    // },
  ];

  // const btnVariant = {
  //   hidden: {

  //   }
  // }

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
