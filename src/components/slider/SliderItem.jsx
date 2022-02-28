import React from 'react';
import PropTypes from 'prop-types';
import config from '../../services/config.json';

const SliderItem = ({ item, sliderAs }) => {
   // console.log(item);
   return (
      <div
         className={`slider-item ${
            sliderAs === 'teacher' ? 'teacher-item' : 'course-item'
         }`}>
         <div className='image'>
            <img src={`${config.baseUrl}${item.picture}`} alt={item.title} />
         </div>
         <div className='name'>
            {sliderAs === 'teacher' ? item.name : item.title}
         </div>
         {sliderAs === 'teacher' ? (
            <div className='lesson'>{item.text}</div>
         ) : null}
      </div>
   );
};

SliderItem.propTypes = {
   item: PropTypes.object.isRequired,
   sliderAs: PropTypes.string.isRequired,
};

export default SliderItem;
