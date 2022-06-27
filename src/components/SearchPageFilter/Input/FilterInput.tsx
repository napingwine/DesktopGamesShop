import React, { FC } from 'react';
import { MyInput } from './NumberInput/NumberInput';
import CustomSlider from './CustomSlider/CustomSlider';
import './Input.scss'

interface IRangeInputWithSlider {
  maxValue: number,
  value: number[],
  setValue: any
}

const RangeInputWithSlider: FC<IRangeInputWithSlider> = ({ maxValue, value, setValue }) => {
  const handleSliderChange = (
    event: Event,
    newValue: number | number[],
    activeThumb: number,
  ) => {
    if (!Array.isArray(newValue)) {
      return;
    }
    if (activeThumb === 0) {
      setValue([Math.min(newValue[0], value[1]), value[1]]);
    } else {
      setValue([value[0], Math.max(newValue[1], value[0])]);
    }
  };

  const handleInputChangeMIN = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue([(+event.target.value), value[1]]);
  };

  const handleInputChangeMAX = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue([value[0], (+event.target.value)]);
  };

  return (
    <div className='range-slider'>
      <div className='range-slider__input-min'>
        <span className='range-slider__input-title'>От</span>
        <MyInput value={value[0]} handleInputChange={handleInputChangeMIN} maxValue={maxValue} />
      </div>
      <div className='range-slider__input-max'>
        <span className='range-slider__input-title'>До</span>
        <MyInput value={value[1]} handleInputChange={handleInputChangeMAX} maxValue={maxValue} />
      </div>
      <div className="range-slider__slider">
        <CustomSlider value={value} handleSliderChange={handleSliderChange} maxValue={maxValue} />
      </div>
    </div>
  );
};

export default RangeInputWithSlider;


