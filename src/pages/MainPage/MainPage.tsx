import React, { FC } from 'react';
import BannerWithSlider from '../../components/BannerWithSlider/BannerWithSlider';
import Contacts from './Contacts';
import MainPageAboutSection from './MainPageAboutSection';
import SpecialPropositionSection from '../../components/SpecialPropositionSection/SpecialPropositionSection';
import { goodsAPI } from '../../services/SpecialPropositionService';
import NearestEventsSection from '../../components/NearestEventsSection/NearestEventsSection';

const MainPage: FC = () => {
  const addToCart = () => {
    console.log(1)
  };

  const byInOneClick = () => {
    console.log(12)
  };

  return (
    <div>
      <BannerWithSlider />
      <SpecialPropositionSection
        sectionTitle={'Успей купить'}
        addToCart={addToCart}
        byInOneClick={byInOneClick}
        apiWithQuery={goodsAPI.useFetchGoodsQuery}
        queryParams={{hurryToBy: true}}
        />
      <SpecialPropositionSection
        sectionTitle={'Специальные предложения'}
        addToCart={addToCart}
        byInOneClick={byInOneClick}
        apiWithQuery={goodsAPI.useFetchGoodsQuery}
        queryParams={{sale_gte: 1, sale_lte: 100}}
      />
      <NearestEventsSection title={"Ближайшие мероприятия"}/>
      <MainPageAboutSection />
      <Contacts />
    </div>
  );
};

export default MainPage;