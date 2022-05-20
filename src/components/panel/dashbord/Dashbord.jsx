import React from 'react';
import { useNavigate } from 'react-router';
import { useDispatch } from 'react-redux';
import {
   getOnlineClassesHandler,
   getWeekPlansHandler,
} from '../../../redux/features/userPanel';
import KunkorTimer from './timer-to-konkur/KunkorTimer';
import Box from './Box';
import {
   BsInboxes,
   BsCreditCard,
   BsFillCalendar2WeekFill,
} from 'react-icons/bs';

import './dashbord.css';
const Dashbord = () => {
   const dispatch = useDispatch();
   const navigate = useNavigate();
   const phoneNumber = localStorage.getItem('phoneNumber');

   return (
      <section className='table-container'>
         <div className='card'>
            <Box
               icon={<BsInboxes />}
               text='کلاس های من'
               onClick={() =>
                  // dispatch(getOnlineClassesHandler({ phoneNumber, navigate }))
                  navigate('/profile/courses')
               }
               to='/my-courses'
            />
            <Box
               icon={<BsCreditCard />}
               text='امور مالی'
               onClick={() => navigate('/profile/financial-services')}
            />
            <Box
               icon={<BsFillCalendar2WeekFill />}
               text='برنامه مطالعاتی'
               onClick={() => {
                  dispatch(getWeekPlansHandler({ phoneNumber, navigate }));
               }}
            />
         </div>
         <KunkorTimer />
      </section>
   );
};

export default Dashbord;
