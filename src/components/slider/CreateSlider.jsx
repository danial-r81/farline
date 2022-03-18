import React from 'react';
import PropTypes from 'prop-types';
import { Swiper, SwiperSlide } from 'swiper/react/swiper-react.js';
import { NavLink } from 'react-router-dom';
import MediaQuery from 'react-responsive';

// css files for swiper
import 'swiper/swiper.min.css';
import 'swiper/swiper-bundle.min.css';
import 'swiper/swiper-bundle';
import SliderItem from './SliderItem';

const CreateSlider = ({
   items,
   topic,
   slidesPerView,
   minWidth,
   maxWidth,
   sliderAs,
   btnTopic,
   goTo,
}) => {
   return (
      <MediaQuery minWidth={minWidth} maxWidth={maxWidth}>
         <h2 className='slider-header'>{topic}</h2>
         <Swiper
            slidesPerView={slidesPerView}
            spaceBetween={30}
            loop={true}
            pagination={{
               clickable: true,
            }}
            navigation={true}
            className='teacher-swiper'>
            {items.map((item, index) => (
               <SwiperSlide key={index}>
                  <SliderItem item={item} sliderAs={sliderAs} />
               </SwiperSlide>
            ))}
         </Swiper>
         <div className='slider-btn'>
            <NavLink to={goTo}>
               <button>برای مشاهده تمامی {btnTopic} کلیک کنید</button>
            </NavLink>
         </div>
      </MediaQuery>
   );
};

CreateSlider.propTypes = {
   items: PropTypes.array.isRequired,
   topic: PropTypes.string.isRequired,
   slidesPerView: PropTypes.number.isRequired,
   minWidth: PropTypes.number,
   maxWidth: PropTypes.number,
   sliderAs: PropTypes.string.isRequired,
   btnTopic: PropTypes.string.isRequired,
   goTo: PropTypes.string.isRequired,
};

export default CreateSlider;
