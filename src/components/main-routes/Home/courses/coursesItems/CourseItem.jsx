import { useNavigate } from 'react-router-dom';
import React from 'react';
import config from '../../../../../services/config.json';
import { useDispatch } from 'react-redux';
import { getCourseHandler } from '../../../../../redux/features/courses';

const CourseItem = ({ item }) => {
   const navigate = useNavigate();
   const dispatch = useDispatch();
   const code = item.code;

   return (
      <div
         key={item.code}
         className='box-right box-all'
         onClick={() => dispatch(getCourseHandler({ code, navigate }))}>
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
