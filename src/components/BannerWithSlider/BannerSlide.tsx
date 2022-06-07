import React, { FC } from 'react';
import CustomButton from '../Buttons/CustomButton';
import './BannerSlide.scss';
import { IBannerSlide } from '../../models/IBannerSlide'

const BannerSlide: FC<IBannerSlide> = ({ title, subTitle, imgURL, listener }) => {
  return (
    <div className='banner-slide'>
      <img src={imgURL} alt="123" />
      <div className="wrapper">
        <div className="banner-slide__title-wrapper">
          <h2 className="banner-slide__title">{title}</h2>
          <h4 className="banner-slide__sub-title">{subTitle}</h4>
        </div>
        <div className="banner-slide__button-wrapper">
          <CustomButton buttonText={'Подробнее'} listener={listener} />
        </div>
      </div>
    </div>
  );
};

export default BannerSlide;