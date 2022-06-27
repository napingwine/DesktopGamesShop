import React, { useEffect, useState } from 'react';
import './Navbar.scss';
import instagramIMG from '../../assets/Icons/instagram.png';
import facebookIMG from '../../assets/Icons/fb.png';
import twitterIMG from '../../assets/Icons/vk.png';
import BurgerMenu from '../Burgermenu';
import { NavLink } from 'react-router-dom';
import CustomInput from '../Inputs/CustomInput';

const Navbar = ({burgerMenuOpen,setBurgerMenuOpen}) => {
  const [searchValue, setSearchValue] = useState<string>('');
  
  return (
    <nav className='nav'>
      <div className="search-wrapper">
        <CustomInput placeholderText='найти' setValue={setSearchValue} value={searchValue} />
      </div>
      <div className="nav__wrapper">

        <div
          onClick={() => setBurgerMenuOpen(!burgerMenuOpen)}
        >
          <BurgerMenu burgerMenuOpen={burgerMenuOpen} textForBurger='Каталог' />
        </div>


        <div className="nav__wrapper__page-link"><NavLink className={({ isActive }) => isActive ? `active` : ''} to='/warhammer' end>Wharhammer</NavLink></div>
        <div className="nav__wrapper__page-link"><NavLink to='/magic' end>Magic:the Cathering</NavLink></div>
        <div className="nav__wrapper__page-link"><NavLink to='/events' end>Мероприятия</NavLink></div>
        <div className="nav__wrapper__page-link"><NavLink to='/about-us' end>О центре</NavLink></div>
        <div className="nav__wrapper__page-link"><NavLink to='/contacts' end>Контакты</NavLink></div>
        <div className="nav__wrapper__social-media-links-wrapper">
          <a href='https://www.instagram.com/' target='_blank' rel="noreferrer"><img src={instagramIMG} alt='instagram link' /></a>
          <a href='https://www.facebook.com/' target='_blank' rel="noreferrer"><img src={facebookIMG} alt='facebook link' /></a>
          <a href='https://www.twitter.com/' target='_blank' rel="noreferrer"><img src={twitterIMG} alt='twitter link' /></a>
        </div>
      </div>
    </nav>
  );
};


export default Navbar;