import { useSelector } from 'react-redux';
import { Swiper, SwiperSlide } from 'swiper/react/swiper-react.js';
import config from '../../../../services/config.json';
import { Navigation } from 'swiper';

import 'swiper/swiper.min.css';
import 'swiper/swiper.min.css';
import 'swiper/swiper-bundle.min.css';
import 'swiper/swiper-bundle';
export function Baner() {
   const banners = useSelector((state) => state.cover.covers);

   return (
      <>
         <Swiper
            slidesPerView={1}
            effect={'fade'}
            spaceBetween={30}
            loop={true}
            pagination={{
               clickable: true,
            }}
            modules={[Navigation]}
            navigation={true}
            className='banner-gallery'>
            {banners?.map((item, index) => (
               <SwiperSlide key={index} className='banner-slide'>
                  <img
                     src={`${config.baseUrl}${item.picture}`}
                     alt='fartak-banner'
                     className='banner-img'
                  />
               </SwiperSlide>
            ))}
         </Swiper>
      </>
   );
}
