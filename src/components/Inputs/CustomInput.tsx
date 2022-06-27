import React, { FC } from 'react';
import './CustomInput.scss';
import searchIcon from '../../assets/Icons/magnifier.png'

interface ICustomInput {
  placeholderText: string,
  value: string,
  setValue: (e) => void
}

const CustomInput: FC<ICustomInput> = ({ placeholderText, value, setValue }) => {
  return (<div className='custom-input'>
    <input className='custom-input__text-area' placeholder={placeholderText} value={value} onChange={(e) => setValue(e.target.value)} />
    <button className='custom-input__button'><img src={searchIcon} alt="search" /></button>
    </div>
  );
};

export default CustomInput;