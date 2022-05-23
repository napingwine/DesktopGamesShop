import React, { FC } from 'react';
import './CustomButton.scss';
import { IButtonCustom } from '../../models/IButton';

const CustomButtonByIOneClick: FC<IButtonCustom> = ({ buttonText, listener }) => {
  return (
    <button
      onClick={listener}
      className='customButton customButton_ByInOneClick'
    >
      {buttonText}
    </button>
  );
};

export default CustomButtonByIOneClick;