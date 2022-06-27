import React from 'react';
import { useSearchParams } from 'react-router-dom';
import GameShoppingCard from '../../components/GameShoppingCard';
import SearchPageFilter from '../../components/SearchPageFilter/SearchPageFilter';
import { searchService } from '../../services/SearchService';
import './style.scss';

const Catalogue = () => {
  const [filterData, setFilterData] = React.useState<object>();
  const { isError, isLoading, data } = searchService.useFetchDataQuery({ ...filterData });
  const [searchParams, setSearchParams] = useSearchParams();

  React.useEffect(() => {
    let filterData: any = {} // do type
    searchParams.forEach((value, key) => filterData[key] = value)
    setSearchParams(filterData)
    setFilterData(filterData)
  }, [searchParams]);

  const addToCart = () => {
    console.log('addToCart')
  }

  const byInOneClick = () => {
    console.log('byInOneClick')
  }

  return (
    <div className='container catalog-page-wrapper'>
      <h1 className="title">{searchParams.get('category') ? searchParams.get('category') : 'Все категории'}</h1>
      <div className="content-wrapper">
        <SearchPageFilter />
        <div className="search-result">
          {isError && <div>Error...</div>}
          {isLoading && <div>Loading...</div>}
          {data && data.map(el => <GameShoppingCard key={el.id} addToCart={addToCart} byInOneClick={byInOneClick} {...el} />)}
        </div>
      </div>
    </div>
  );
};

export default Catalogue;