import React, { FC } from 'react';
import './CustomButton.scss';
import cart from './../../assets/Icons/clarity_shopping-cart-line.png';
import { IButtonCustom } from '../../models/IButton';

const CustomButtonShop: FC<IButtonCustom> = ({ buttonText, listener }) => {

  return (
    <button
      onClick={listener}
      className='customButton customButton_Shop'
    >
      {buttonText}<img src={cart} />
    </button>
  );
}

export default CustomButtonShop;