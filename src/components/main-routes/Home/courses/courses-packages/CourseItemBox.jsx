import React from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router';
import { getCoursePackHandler } from '../../../../../redux/features/courses';
import config from '../../../../../services/config.json';

const CourseItemBox = ({ item }) => {
   const dispatch = useDispatch();
   const navigate = useNavigate();
   console.log(item);
   return (
      <div
         className='course-box'
         onClick={() => dispatch(getCoursePackHandler({ item, navigate }))}>
         <div className='course-box-img'>
            <img src={`${config.baseUrl}${item.picture}`} alt='' />
         </div>
         <div className='course-box-text'>
            <p> {item.show_title}</p>
         </div>
      </div>
   );
};

export default CourseItemBox;
