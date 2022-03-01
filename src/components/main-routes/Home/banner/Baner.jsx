import { useSelector } from 'react-redux';
import { Swiper, SwiperSlide } from 'swiper/react/swiper-react.js';
import { EffectFade, Navigation, Pagination } from 'swiper';
import config from '../../../../services/config.json';
import 'swiper/swiper.min.css';

export function Baner() {
   const banners = useSelector((state) => state.coverReducer.covers);
   console.log(banners);

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
            navigation={true}
            className='banner-gallery'>
            {banners?.map((item) => (
               <SwiperSlide className='banner-slide'>
                  <img
                     src={`${config.baseUrl}${item.picture}`}
                     alt=''
                     className='banner-img'
                  />
               </SwiperSlide>
            ))}
         </Swiper>
      </>
   );
}
