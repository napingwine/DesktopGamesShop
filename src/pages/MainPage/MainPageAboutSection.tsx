import React from 'react';
import photoOfOurShop from '../../assets/images/photoOfOurShop.png';
import './MainPage.scss';

const MainPageAboutSection = () => {
  return (
    <section className='container main-page__section-about-us'>
      <h2 className="main-page__section-about-us__title">Об игровом центре «GoldFish»</h2>
      <div className="main-page__section-about-us__text">
        <p>«GoldFish»- магазин, в котором Вы можете купить отличный подарок как для себя, так и для своих близких.</p>
        <p>В ассортименте нашего магазина представлены тысячи настольных игр на любой вкус: простые и посложнее, семейные и только для взрослых, для двоих и для больших компаний, детективные и логические, ролевые и стратегические настолки. «GoldFish» также  регулярно проводит собственные игротеки:турниры по Magic: the Gathering (от компании Wizards of the coast) и Warhammer (от Games Workshop).</p>
        <p>В нашем магазине можно найти нужные аксессуары для любимых игр (протекторы для карт и коллекций), инструменты для самостоятельного оформления и покраски фигурок (кейсы, подставки, краски Vallejo и др.) и многое другое.</p>
        <p>«GoldFish» - это не только магазин настольных игр, но и полноценный хобби-центр. Здесь можно арендовать столы для игр с друзьями, проходить обучение и мастер-классы по интересующим тебя играм, заводить новые знакомства и приобщаться к игровому комьюнити!</p>
      </div>
      <img src={photoOfOurShop} alt="photo" className="main-page__section-about-us__image" />
    </section>
  );
};

export default MainPageAboutSection;