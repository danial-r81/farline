// import { Navigation, Pagination } from 'swiper';
// Direct React component imports
import { Swiper, SwiperSlide } from 'swiper/react/swiper-react.js';
import 'swiper/swiper.min.css';

export function Baner() {
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
        {[1, 2, 3, 4].map((item) => (
          <SwiperSlide className='banner-slide'>
            <img src='https://via.placeholder.com/150' alt='' />
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
}
