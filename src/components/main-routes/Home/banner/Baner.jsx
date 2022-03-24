import { useSelector } from 'react-redux';
import { Swiper, SwiperSlide } from 'swiper/react/swiper-react.js';
import config from '../../../../services/config.json';
import 'swiper/swiper.min.css';

export function Baner() {
   const banners = useSelector((state) => state.cover.covers);

   // const banners = [
   //    {
   //       img: 'images/project-a.jpg',
   //    },
   //    {
   //       img: 'images/project-b.jpg',
   //    },
   // ];

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
            {banners?.map((item, index) => (
               <SwiperSlide key={index} className='banner-slide'>
                  <img
                     src={`${config.baseUrl}${item.picture}`}
                     alt='fartak-banner'
                     className='banner-img'
                  />
                  {/* <img src={item.img} alt='' className='banner-img' /> */}
               </SwiperSlide>
            ))}
         </Swiper>
      </>
   );
}
