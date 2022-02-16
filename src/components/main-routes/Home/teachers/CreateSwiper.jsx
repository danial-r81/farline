import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react/swiper-react.js';
import { Teacher } from './Teacher';
import { NavLink } from 'react-router-dom';
import { motion } from 'framer-motion';
import MediaQuery from 'react-responsive';

// css files for swiper
import 'swiper/swiper.min.css';
import 'swiper/swiper-bundle.min.css';
import 'swiper/swiper-bundle';

const CreateSwiper = ({ teachers, slidesPerView, minWidth, maxWidth }) => {
   return (
      <MediaQuery minWidth={minWidth} maxWidth={maxWidth}>
         <h2 className='teacher-header'>اساتید</h2>
         <Swiper
            slidesPerView={slidesPerView}
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
   );
};

export default CreateSwiper;
