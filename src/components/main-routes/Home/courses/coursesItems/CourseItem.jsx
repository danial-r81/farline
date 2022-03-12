import React from 'react';
import config from '../../../../../services/config.json';

const CourseItem = ({ item }) => {
   return (
      <div key={item.code} className='box-right box-all'>
         <div className='box-container'>
            <img src={`${config.baseUrl}${item.picture}`} alt='' />
            <div className='course-details'>
               <h2>{item.title_persion}</h2>
               <h3>قیمت دوره : 500000 تومان</h3>
            </div>
         </div>
      </div>
   );
};

export default CourseItem;
