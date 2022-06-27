import React from "react";
import MuiInput from '@mui/material/Input';
import GlobalStyles from '@mui/material/GlobalStyles';

export const MyInput = ({ value, handleInputChange, maxValue }) => {
  return (
    <React.Fragment>
      <GlobalStyles styles={{
        ".MuiInput-input.MuiInputBase-input":{
          'border': '1px solid black',
          'borderRadius': '9px',
          'padding': '2px'
        },
        '.css-1tcs2i1-MuiInputBase-root-MuiInput-root:before':{
          display: 'none'
        }
      }} />
      <MuiInput
        value={value}
        size="small"
        onChange={handleInputChange}
        inputProps={{
          step: 10,
          min: 0,
          max: maxValue,
          type: 'number',
          'aria-labelledby': 'input-slider',
        }}
      />
    </React.Fragment>
  );
}