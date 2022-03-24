import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { getWeekPlanHandler } from '../../../redux/features/userPanel';
import {
   BsInboxes,
   BsCreditCard,
   BsFillCalendar2WeekFill,
} from 'react-icons/bs';
import Box from './Box';

import './dashbord.css';
import { getMyCoursesHandler } from '../../../redux/features/courses';
import { useNavigate } from 'react-router';
const Dashbord = () => {
   const dispatch = useDispatch();
   const navigate = useNavigate();
   const phoneNumber = localStorage.getItem('phoneNumber');

   useEffect(() => {
      dispatch(getWeekPlanHandler(phoneNumber));
   }, []);

   return (
      <section className='table-container'>
         <div className='card'>
            <Box
               icon={<BsInboxes />}
               text='دوره های شما'
               onClick={() =>
                  dispatch(getMyCoursesHandler({ phoneNumber, navigate }))
               }
               to='/my-courses'
            />
            <Box icon={<BsCreditCard />} text='امور مالی' />
            <Box icon={<BsFillCalendar2WeekFill />} text='برنامه مطالعاتی' />
         </div>
      </section>
   );
};

export default Dashbord;
