import React from 'react';
import PropTypes from 'prop-types';
import config from '../../services/config.json';

import './slider.css';
const SliderItem = ({ item }) => {
   console.log(item);
   return (
      <div className='teacher-gallery-item'>
         <img
            className='teacher-img'
            src={`${config.baseUrl}${item.picture}`}
            alt=''
         />
         <div className='teacher-information'>
            <div className='teacher-name'>{item.name}</div>
            <div className='teacher-reshte'>{item.reshte_text}</div>
         </div>
      </div>
   );
};

SliderItem.propTypes = {
   item: PropTypes.object.isRequired,
   sliderAs: PropTypes.string.isRequired,
};

export default SliderItem;
