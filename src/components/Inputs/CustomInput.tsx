import React, { FC } from 'react';
import './CustomInput.scss';

interface ICustomInput {
  placeholderText: string,
  value: string,
  listener: (e) => void
}

const CustomInput: FC<ICustomInput> = ({ placeholderText, value, listener }) => {
  return (
    <input className='custom-input' placeholder={placeholderText} value={value} onChange={(e) => listener(e)} />
  );
};

export default CustomInput;