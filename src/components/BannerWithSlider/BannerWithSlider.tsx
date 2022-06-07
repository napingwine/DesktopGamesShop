import React from 'react';
import bannerBackground from '../../BDAssets/SliderBanner/bannerslide.png';
import bannerBackground2 from '../../BDAssets/SliderBanner/bannerslide2.png';
import bannerBackground3 from '../../BDAssets/SliderBanner/bannerslide3.png';
import './BannerWithSlider.scss'
import BannerSlider from './BannerSlider';


const slidesData = [
  {
    id:1,
    title: 'Magic: the Gathering',
    subTitle: 'Самая популярная карточная игра',
    imgURL: bannerBackground,
  },
  {
    id:2,
    title: '2Magic: the Gathering',
    subTitle: 'Самая популярная карточная игра',
    imgURL: bannerBackground2,
  },
  {
    id:3,
    title: '3Magic: the Gathering',
    subTitle: 'Самая популярная карточная игра',
    imgURL: bannerBackground3,
  },
  {
    id:4,
    title: '4Magic: the Gathering',
    subTitle: 'Самая популярная карточная игра',
    imgURL: bannerBackground,
  },
  {
    id:5,
    title: '5Magic: the Gathering',
    subTitle: 'Самая популярная карточная игра',
    imgURL: bannerBackground2,
  },
]



const BannerWithSlider = () => {

  const slideButtonListener = () => {
    console.log('slideButtonListener')
  }

  return (
    <div className='banner-with-slider__wrapper'>
      <BannerSlider slidesData={slidesData} buttonListener={slideButtonListener}/>
    </div>
  );
};

export default BannerWithSlider;