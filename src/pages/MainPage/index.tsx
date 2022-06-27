import React, { FC } from 'react';
import BannerWithSlider from '../../components/BannerWithSlider/BannerWithSlider';
import Contacts from './Contacts';
import MainPageAboutSection from './MainPageAboutSection';
import SpecialPropositionSection from '../../components/SpecialPropositionSection';
import { goodsAPI } from '../../services/SpecialPropositionService';
import NearestEventsSection from '../../components/NearestEventsSection/NearestEventsSection';
import CatalogSection from './CatalogSection/CatalogSection';

import { doOnClick } from '../../FAKEAPIFUNCTIONS/CreateFakeItemsDataBase';
import axios from 'axios';

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
      <CatalogSection/>
      <SpecialPropositionSection
        sectionTitle={'Успей купить'}
        addToCart={addToCart}
        byInOneClick={byInOneClick}
        apiWithQuery={goodsAPI.useFetchGoodsQuery}
        queryParams={{amount_gte: 0, amount_lte: 3}}
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

      {/* <button onClick={doOnClick}>нажми</button><button onClick={()=>{axios.get('http://localhost:5000/goods').then(res=> console.log(res))}}>Получить</button> */}
    
    </div>
  );
};

export default MainPage;