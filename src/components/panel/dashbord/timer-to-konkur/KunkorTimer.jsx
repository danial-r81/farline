import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getTimeLeftToKonkurHandler } from '../../../../redux/features/userPanel';
import http from '../../../../services/httpService';

const KunkorTimer = () => {
   const dispatch = useDispatch();
   const { today, day, week } = useSelector((state) => state.panel.konkurTimer);
   useEffect(() => {
      dispatch(getTimeLeftToKonkurHandler());
   });
   return (
      <div className='konkur-timer'>
         <div className='today timer-text'>
            <p>امروز {today}</p>
         </div>
         <div className='left-days timer-text'>
            <p>{day} روز مانده به کنکور</p>
         </div>
         <div className='left-weeks timer-text'>
            <p>{week} هفته مانده به کنکور</p>
         </div>
      </div>
   );
};

export default KunkorTimer;
