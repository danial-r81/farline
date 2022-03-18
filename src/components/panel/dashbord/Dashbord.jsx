import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { getWeekPlanHandler } from '../../../redux/features/userPanel';
import Box from './Box';

import './dashbord.css';
const Dashbord = () => {
   const dispatch = useDispatch();
   const phoneNumber = localStorage.getItem('phoneNumber');

   useEffect(() => {
      dispatch(getWeekPlanHandler(phoneNumber));
   }, []);

   return (
      <section className='table-container'>
         <div className='card'>
            <Box icon='bi bi-journal-bookmark-fill' text='دوره های شما' />
            <Box icon='bi bi-cash' text='امور مالی' />
            <Box icon='bi bi-calendar-day' text='برنامه مطالعاتی' />
         </div>
      </section>
   );
};

export default Dashbord;
