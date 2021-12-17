// import { Navigation, Pagination } from 'swiper';
// Direct React component imports
import { Swiper, SwiperSlide } from 'swiper/react/swiper-react.js';
import 'swiper/swiper.min.css';

export function Baner() {
  const banner = [
    {
      image: 'images/banner/banner-1.png',
    },
    {
      image: 'images/banner/banner-2.jpg',
    },
    {
      image: 'images/banner/banner-3.png',
    },
    {
      image: 'images/banner/banner-4.png',
    },
    {
      image: 'images/banner/banner-5.png',
    },
  ];

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
        {banner.map((item) => (
          <SwiperSlide className='banner-slide'>
            <img src={item.image} alt='' className='banner-img' />
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
}
