import React, { FC } from 'react';
import './CustomButton.scss';

interface ICustomButton {
  listener?: (e) => void,
  buttonText: string,
  style?: object
}

const CustomButton: FC <ICustomButton> = ({listener, buttonText, style}) => {
  const ButtonListener = (e) => {
    listener && listener(e)
  }

  return (
    <button
      onClick={e=>ButtonListener(e)}
      className='customButton customButton_Shop'
      style={style}
    >
      {buttonText}
    </button>
  );
};

export default CustomButton;