import React from 'react';
import Pagination from '@mui/material/Pagination';

const CustomPagination = ({ totalCount, limit, currentPage, setCurrentPage, customClass }) => {
  const handleChange = (event: React.ChangeEvent<unknown>, value: number) => {
    setCurrentPage(value)
  };

  return (
    <div className={`pagination-wrapper ${customClass}`}>
      <Pagination
        count={totalCount ? Math.ceil(totalCount / limit) : 1}
        page={currentPage}
        onChange={handleChange}
      />
    </div>
  );
};

export default CustomPagination;