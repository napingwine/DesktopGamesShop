import React from "react";
import { useAppDispatch } from "../../hooks/redux";

const FilterItemCategory = ({ filterAddCategory, filterRemoveCategory, el }) => {
  const dispatch = useAppDispatch();
  const [checked, setChecked] = React.useState(false);
  const handleChange = (el) => {
    if (checked) {
      setChecked(false)
      dispatch(filterRemoveCategory(el))
    } else {
      setChecked(true)
      dispatch(filterAddCategory(el))
    }
  };
  return (
    <div key={el}
      onClick={() => handleChange(el)}
      className={`${checked ? 'selected-item' : ''} filter-item-category`}
    >
      {el}
    </div>
  )
};

export default FilterItemCategory