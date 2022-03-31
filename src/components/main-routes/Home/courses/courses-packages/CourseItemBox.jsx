import React from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router';
import { getCoursePackHandler } from '../../../../../redux/features/courses';
import { FaSchool } from 'react-icons/fa';
import { IoMdSchool } from 'react-icons/io';
import { GiSchoolBag } from 'react-icons/gi';
import config from '../../../../../services/config.json';

const CourseItemBox = ({ item }) => {
   const dispatch = useDispatch();
   const navigate = useNavigate();
   let icon = null;

   console.log(item);

   switch (item.icon) {
      case 'FaSchool':
         icon = <FaSchool className='course-icon' />;
         break;
      case 'IoMdSchool':
         icon = <IoMdSchool className='course-icon' />;
         break;
      case 'GiSchoolBag':
         icon = <GiSchoolBag className='course-icon' />;
   }

   return (
      <div
         className='course-box'
         onClick={() => dispatch(getCoursePackHandler({ item, navigate }))}>
         {icon}
         <div className='course-box-text'>
            <p> {item.show_title}</p>
         </div>
      </div>
   );
};

export default CourseItemBox;
