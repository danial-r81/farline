import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getFinancialServicesHandler } from '../../../redux/features/userPanel';
import FinancialServicesItem from './FinancialServicesItem';

import './financials.css';
const FinancialServices = () => {
   const dispatch = useDispatch();
   const { financialServices } = useSelector((state) => state.panel);
   const phoneNumber = localStorage.getItem('phoneNumber');
   useEffect(() => {
      dispatch(getFinancialServicesHandler(phoneNumber));
   }, []);
   console.log(financialServices);

   const NoFinancials = () => (
      <div className='no-financials-container'>
         <p>دوره ای خریداری نشده است</p>
      </div>
   );

   return (
      <section className='financial-contianer'>
         {financialServices.map((item) => (
            <FinancialServicesItem
               courseKind='انلاین'
               courseTitle={item.text}
               courseDate={item.date}
               courseStatus='پرداخت شده'
               interceptionCode={item.hash_code_simple}
               price={item.pay}
            />
         ))}
      </section>
   );
};

export default FinancialServices;
