import React from 'react';
import './Footer.scss';
import { NavLink } from 'react-router-dom';
import CustomButtonByIOneClick from '../Buttons/CustomButtonByIOneClick';
import { useAppSelector } from '../../hooks/redux';
import visaLogo from '../../assets/Icons/VISA-logo.png';
import masterCardLogo from '../../assets/Icons/Mastercard-logo.png';
import logo from '../../assets/images/logo.png';
import twitterIMG from '../../assets/Icons/vk.png';
import instagramIMG from '../../assets/Icons/instagram.png';
import facebookIMG from '../../assets/Icons/fb.png';

const Footer = () => {
  const categories = useAppSelector(state => state.categoryReducer.categories);

  const orderCallButtonListener = () => {
    console.log('orderCallButtonListener')
  }

  return (
    <footer className='footer'>
      <div className='footer__wrapper'>
        <div className="footer__wrapper__upper-section">
          <NavLink to='/' className="footer__wrapper__upper-section__column1-logo">
            <img src={logo} alt="logo" />
          </NavLink>
          <p className="footer__wrapper__upper-section__column1-address">
            г. Киев, ул Свободы 6
          </p>
          <div className="footer__wrapper__upper-section__column2">
            <NavLink to='/catalogue' className="footer__wrapper__upper-section__column2__title"><h3>Каталог</h3></NavLink>
            <div className="footer__wrapper__upper-section__column2__categories-list">
              {categories.map(category =>
                <NavLink
                  to={`/catalogue?category=${category.categoryName}`}
                  key={category.categoryName}
                  className='footer__wrapper__upper-section__column2__categories-list__item'>
                  {category.categoryName}
                </NavLink>
              )}
            </div>
          </div>
          <div className="footer__wrapper__upper-section__column3">
            <NavLink to='/rules'><h3>Правила клуба</h3></NavLink>
            <NavLink to='/events'><h3>Мероприятия</h3></NavLink>
            <NavLink to='/about-us'><h3>О нас</h3></NavLink>
            <NavLink to='/contacts'><h3>Контакты</h3></NavLink>
            <NavLink to='/blog'><h3>Блог</h3></NavLink>
          </div>
          <div className="footer__wrapper__upper-section__column4">
            <NavLink to='/rules'>Оплата и досавка</NavLink>
            <NavLink to='/rules'>Гарантия и возврат</NavLink>
          </div>
          <div className="footer__wrapper__upper-section__column5">
            <div className="footer__wrapper__upper-section__column5__order-call">
              <CustomButtonByIOneClick buttonText='Заказать Звонок' listener={orderCallButtonListener} />
            </div>
            <a href="tel:+380999999999">+(380) 99-999-99-99</a>
            <a href="email:magicgoldfish@gmail.com">magicgoldfish@gmail.com</a>
            <div className="footer__wrapper__upper-section__column5__social-network-group">
              <a href='https://www.instagram.com/' target='_blank' rel="noreferrer"><img src={instagramIMG} alt='instagram link' /></a>
              <a href='https://www.facebook.com/' target='_blank' rel="noreferrer"><img src={facebookIMG} alt='facebook link' /></a>
              <a href='https://www.twitter.com/' target='_blank' rel="noreferrer"><img src={twitterIMG} alt='twitter link' /></a>
            </div>
          </div>
        </div>
        <div className="footer__wrapper__lower-section__wrapper">
          <div className="footer__wrapper__lower-section">
            <div className="footer__wrapper__lower-section__politic">
              <p>© 2021 MagicGoldFish.ru</p>
              <a href="#">Политика конфиденциальности</a>
            </div>
            <div className="footer__wrapper__lower-section__available-credit-cards">
              <img src={visaLogo} alt="Visa" className="footer__wrapper__lower-section__available-credit-cards__item" />
              <img src={masterCardLogo} alt="MasterCard" className="footer__wrapper__lower-section__available-credit-cards__item" />
            </div>
            <div className="footer__wrapper__lower-section__user-agreement">
              <p>Содержимое не является публичной офертой </p>
              <a href="#">Пользовательское соглашение</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;