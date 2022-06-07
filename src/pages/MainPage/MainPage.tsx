import React, { FC } from 'react';
import BannerWithSlider from '../../components/BannerWithSlider/BannerWithSlider';
import Contacts from './Contacts';
import MainPageAboutSection from './MainPageAboutSection';
import SpecialProposition from './SpecialProposition';

const MainPage: FC = () => {
  return (
    <div>
      <BannerWithSlider/>
      <SpecialProposition/>
      <MainPageAboutSection/>
      <Contacts />
    </div>
  );
};

export default MainPage;