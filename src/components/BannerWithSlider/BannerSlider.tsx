import React from 'react';
import BannerSlide from './BannerSlide';
import './BannerSlider.scss'

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import { Navigation, Pagination, A11y } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

const BannerSlider = ({ slidesData, buttonListener }) => {
  return (
    <div>
      <Swiper
        modules={[Navigation, Pagination, A11y]}
        initialSlide = {1}
        slidesPerView= {'auto'}
        spaceBetween={5}
        loop={true}
        navigation
        pagination
        breakpoints={{
          767: {
            centeredSlides: true,
          },
        }}
        className='my-swiper'
      >
        {slidesData.map(slideData =>
          <SwiperSlide key={slideData.id}>
            <BannerSlide {...slideData}/>
          </SwiperSlide>
        )}
      </Swiper>
    </div>
  );
};

export default BannerSlider;