import React from 'react';
import Slider from '@mui/material/Slider';

const CustomSlider = ({ value, handleSliderChange, maxValue }) => {
  return (
      <Slider
        getAriaLabel={() => 'Minimum distance'}
        value={value}
        onChange={handleSliderChange}
        valueLabelDisplay="auto"
        disableSwap
        max={maxValue}
      />
  );
};

export default CustomSlider;