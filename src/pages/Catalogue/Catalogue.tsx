import React from 'react';
import { useSearchParams } from 'react-router-dom';
import GameShoppingCard from '../../components/GameShoppingCard';
import Pagination from '../../components/Pagination/Pagination';
import SearchPageFilter from '../../components/SearchPageFilter/SearchPageFilter';
import { searchService } from '../../services/SearchService';
import './CatalogueStyle.scss';

const Catalogue = () => {
  const [filterData, setFilterData] = React.useState<object>();
  const [searchParams, setSearchParams] = useSearchParams();
  const [limit, setLimit] = React.useState<number>(6);
  const [currentPage, setCurrentPage] = React.useState<number>(1);
  const { isError, isLoading, data } = searchService.useFetchDataQuery({ ...filterData, _limit: limit, _page: currentPage });

  React.useEffect(() => {
    let filterData: any = {} // do type
    searchParams.forEach((value, key) => filterData[key] = value)
    setSearchParams(filterData)
    setFilterData(filterData)
    setCurrentPage(1)
  }, [searchParams]);

  const addToCart = () => {
    console.log('addToCart')
  };

  const byInOneClick = () => {
    console.log('byInOneClick')
  };

  return (
    <div className='container catalog-page-wrapper'>
      <h1 className="title">{searchParams.get('category') ? searchParams.get('category') : 'Все категории'}</h1>
      <div className="content-wrapper">
        <SearchPageFilter />
        <div className="search-result">
          {isError && <div>Error...</div>}
          {isLoading && <div>Loading...</div>}
          {data && data.apiResponse.map(el => <GameShoppingCard key={el.id} addToCart={addToCart} byInOneClick={byInOneClick} {...el} />)}
          <Pagination
            customClass={'pagination'}
            totalCount={data?.totalCount}
            limit={limit}
            currentPage={currentPage}
            setCurrentPage={setCurrentPage} />
        </div>
      </div>
    </div>
  );
};

export default Catalogue;