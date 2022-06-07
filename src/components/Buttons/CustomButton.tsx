import React, { FC } from 'react';

interface ICustomButton {
  listener: (e) => void,
  buttonText: string,
  style?: object
}

const CustomButton: FC <ICustomButton> = ({listener, buttonText, style}) => {
  return (
    <button
      onClick={e=>listener(e)}
      className='customButton customButton_Shop'
      style={style}
    >
      {buttonText}
    </button>

  );
};

export default CustomButton;