import { useSelector } from 'react-redux';
import { Swiper, SwiperSlide } from 'swiper/react/swiper-react.js';
import config from '../../../../services/config.json';
import 'swiper/swiper.min.css';

export function Baner() {
   // const banner = [
   //   {
   //     image: 'images/banner/banner-3.png',
   //   },
   //   {
   //     image: 'images/banner/banner-2.jpg',
   //   },
   //   {
   //     image: 'images/banner/banner-1.png',
   //   },
   //   {
   //     image: 'images/banner/banner-4.png',
   //   },
   //   {
   //     image: 'images/banner/banner-5.png',
   //   },
   // ];

   const banners = useSelector((state) => state.coverReducer.covers);
   console.log(banners);

   return (
      <>
         <Swiper
            slidesPerView={1}
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
