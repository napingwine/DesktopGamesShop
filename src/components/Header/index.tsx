import React, { useState } from 'react';
import CustomInput from '../Inputs/CustomInput';
import './Header.scss';
import logo from '../../assets/images/logo.png';
import phoneIcon from '../../assets/Icons/phone.png';
import profileIcon from '../../assets/Icons/profile.png';
import cartIconWhite from '../../assets/Icons/white-cart.png';
import { NavLink } from 'react-router-dom';
import BurgerMenu from '../Burgermenu';
import { useAppSelector } from '../../hooks/redux';

const Header = ({ burgerMenuOpen, setBurgerMenuOpen }) => {
  const [searchValue, setSearchValue] = useState<string>('');
  const { items } = useAppSelector(state => state.cartReducer);

  ///
  const openProfile = () => {
    console.log('openProfile')
  }
  ///

  return (
    <header className="header">
      <div className="header__wrapper">
        <div className="header-burger" onClick={() => setBurgerMenuOpen(!burgerMenuOpen)}>
          <BurgerMenu burgerMenuOpen={burgerMenuOpen} textForBurger='' />
        </div>
        <NavLink to='/' end>
          <img className="header__logo" src={logo} alt='logo' />
        </NavLink>
        <div className="header__search">
          <CustomInput placeholderText='Найти игру' value={searchValue} setValue={setSearchValue} />
        </div>
        <div className="header__contact-phone">
          <img className="header__contact-phone__icon" src={phoneIcon} alt='phone' />
          <p className="header__contact-phone__number">+380 (93) 911-10-11</p>
        </div>
        <div className="header__cabinet-and-cart-wrapper">
          <img src={profileIcon} className="header__cabinet-and-cart-wrapper__profile" alt='profile' onClick={openProfile} />
          <NavLink to='/cart' className="header__cabinet-and-cart-wrapper__cart-wrapper">
            <img src={cartIconWhite} className="header__cabinet-and-cart-wrapper__cart-wrapper__cart" alt='cart' />
            {items.length && <div className="header__cabinet-and-cart-wrapper__cart-wrapper__cart__items-amount">{items.length}</div>}
          </NavLink>
        </div>
      </div>
    </header>
  );
};

export default Header;