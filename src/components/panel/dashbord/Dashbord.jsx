import React from 'react';
import './dashbord.css';
import Box from './Box';
import { courseLogo, diaryLogo, moneyBagLogo } from '../../../assets';

export const Dashbord = () => {
   return (
      <section className='table-container'>
         <div class='card'>
            <div class='box'>
               <div class='boxs'>
                  <div class=''>
                     <div class='cardname'>دوره های شما</div>
                  </div>
                  <img src={courseLogo} alt='' />
               </div>
            </div>
            <div class='box'>
               <div class='boxs'>
                  <div class=''>
                     <div class='cardname'>امور مالی</div>
                  </div>
                  <img src={moneyBagLogo} alt='' />
               </div>
            </div>
            <div class='box'>
               <div class='boxs'>
                  <div class=''>
                     <div class='cardname'>برنامه مطالعاتی</div>
                  </div>
                  <img src={diaryLogo} alt='' />
               </div>
            </div>
         </div>
      </section>
   );
};
