import React from "react";
import { useAppDispatch } from "../../../hooks/redux";
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';

const FilterByAgeItem = ({ age, filterAddAge, filterRemoveAge }) => {
  const [checked, setChecked] = React.useState<boolean>(false);
  const dispatch = useAppDispatch();

  const handleChange = () => {
    if (checked) {
      setChecked(false);
      dispatch(filterRemoveAge(age))
    } else {
      setChecked(true);
      dispatch(filterAddAge(age))
    }
  };

  return <FormControlLabel control={
    <Checkbox
      checked={checked}
      onChange={handleChange}
      inputProps={{ 'aria-label': 'controlled' }}
    />
  } label={age} />
}

const FilterByAge = ({ages, filterAddAge, filterRemoveAge }) => {
  return (
    <div>
      {ages.map(el => <FilterByAgeItem key={el} age={el} filterAddAge={filterAddAge} filterRemoveAge={filterRemoveAge}/>)}
    </div>
  );
};

export default FilterByAge;