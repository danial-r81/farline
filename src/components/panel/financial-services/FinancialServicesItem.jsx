import React from 'react';
import PropTypes from 'prop-types';

const FinancialServicesItem = ({
   courseTitle,
   courseKind,
   courseDate,
   courseStatus,
   interceptionCode,
   price,
}) => {
   return (
      <div className='contianer-detiale'>
         <div className='financial-contianer-title'>
            <h2>{courseTitle}</h2>
         </div>
         <div className='contianer-detiale-border'></div>
         <div className='financial-contianer-detiale'>
            <div className='course-kind'>
               <h3>نوع دوره</h3>
               <span>{courseKind}</span>
            </div>
            <div className='contianer-detiale-border'></div>
            <div className='bought-date'>
               <h3>تاریخ ثبت سفارش</h3>
               <span>{courseDate}</span>
            </div>
            <div className='contianer-detiale-border'></div>
            <div className='course-status'>
               <h3>وضعیت</h3>
               <span>{courseStatus}</span>
            </div>
            <div className='contianer-detiale-border'></div>
            <div className='bought-course-price'>
               <h3>مبلغ کل</h3>
               <span>{price} تومان</span>
            </div>
            <div className='contianer-detiale-border'></div>
            <div className='interception-code'>
               <h3>کد رهگیری</h3>
               <span>{interceptionCode}</span>
            </div>
         </div>
      </div>
   );
};

FinancialServicesItem.propTypes = {};

export default FinancialServicesItem;
