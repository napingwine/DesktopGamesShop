import React from 'react';
import './BannerWithSlider.scss'
import BannerSlider from './BannerSlider';

import { bannerDataAPI } from '../../services/BannerService'

const BannerWithSlider = () => {
  const { error, isLoading, data: slidesData } = bannerDataAPI.useFetchBannerDataQuery({});

  const slideButtonListener = () => {
    console.log('slideButtonListener')
  }

  return (
    <div className='banner-with-slider__wrapper'>
      {isLoading && <h1>... IS LOADING</h1>}
      {error && <h1> Error... </h1>}
      {slidesData && <BannerSlider slidesData={slidesData} buttonListener={slideButtonListener} />}
    </div>
  );
};

export default BannerWithSlider;