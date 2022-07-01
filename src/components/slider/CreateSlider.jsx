import React from 'react';
import PropTypes from 'prop-types';
import { Swiper, SwiperSlide } from 'swiper/react/swiper-react.js';
import { Navigation } from 'swiper';
import { NavLink } from 'react-router-dom';
import MediaQuery from 'react-responsive';

// css files for swiper
import 'swiper/swiper.min.css';
import 'swiper/swiper-bundle.min.css';
import 'swiper/swiper-bundle';
import SliderItem from './SliderItem';

const CreateSlider = ({ items, slidesPerView, minWidth, maxWidth }) => {
   return (
      <MediaQuery minWidth={minWidth} maxWidth={maxWidth}>
         <h2 className='slider-header'>اساتید فرلاین</h2>
         <Swiper
            slidesPerView={slidesPerView}
            spaceBetween={30}
            loop={true}
            pagination={{
               clickable: true,
            }}
            navigation={true}
            className='teacher-swiper'
            modules={[Navigation]}>
            {items?.map((item, index) => (
               <SwiperSlide key={index}>
                  <SliderItem item={item} />
               </SwiperSlide>
            ))}
         </Swiper>
         <div className='slider-btn'>
            <NavLink to='/teachers'>
               <button>برای مشاهده تمامی اساتید کلیک کنید</button>
            </NavLink>
         </div>
      </MediaQuery>
   );
};

CreateSlider.propTypes = {
   items: PropTypes.array.isRequired,
   slidesPerView: PropTypes.number.isRequired,
   minWidth: PropTypes.number,
   maxWidth: PropTypes.number,
};

export default CreateSlider;
