import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router';
import {
   getWeekPlanAfterRfresh,
   getWeekPlansHandler,
} from '../../../redux/features/userPanel';
import config from '../../../services/config.json';

const WeekPlan = () => {
   const dispatch = useDispatch();
   const phoneNumber = localStorage.getItem('phoneNumber');
   const { weekPlanImages } = useSelector((state) => state.panel);
   useEffect(() => {
      dispatch(getWeekPlanAfterRfresh(phoneNumber));
   }, []);
   return (
      <div className='week-plan-container'>
         {weekPlanImages.map((item, index) => (
            <div className='week-plan' key={index}>
               <div className='week-plan-title'>
                  <p>{item.title}</p>
               </div>
               <img src={`${config.baseUrl}${item.picture}`} alt={item.title} />
            </div>
         ))}
      </div>
   );
};

export default WeekPlan;
