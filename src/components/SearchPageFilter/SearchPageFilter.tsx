import './SearchPageFilter.scss';
import React from 'react';
import PriceInputWithSlider from './Input/FilterInput';
import FilterItemAccordion from './FilterItemAccordion';
import Checkbox from '@mui/material/Checkbox';
import FormControlLabel from '@mui/material/FormControlLabel';
import { useAppSelector } from '../../hooks/redux';
import { useSearchParams } from 'react-router-dom';

const SearchPageFilter = () => {
  const categories = useAppSelector(state => state.categoryReducer.categories);
  const [searchParams, setSearchParams] = useSearchParams();
  const priceMax = 50000;
  const queries = Object.fromEntries([...searchParams])

  const onAllCategorySet = () => {
    delete queries['category']
    delete queries['subCategory']
    setSearchParams(queries)
  };

  const onCategorySet = (data) => {
    delete queries['subCategory']
    setSearchParams({ ...queries, category: data })
  };

  const onSubCategorySet = (category, subCategory) => {
    setSearchParams({ ...queries, category: category, subCategory: subCategory })
  };

  const onPriceSet = (data) => {
    setSearchParams({ ...queries, price_gte: data[0], price_lte: data[1] })
  };

  const onOnlyWithSaleSet = () => {
    if (searchParams.get('sale_gte')) {
      delete queries['sale_gte']
      setSearchParams(queries)
    } else {
      setSearchParams({ ...queries, sale_gte: '1' })
    }
  };

  const onInStockSet = () => {
    if (searchParams.get('amount_gte')) {
      delete queries['amount_gte']
      setSearchParams(queries)
    } else {
      setSearchParams({ ...queries, amount_gte: '1' })
    }
  };

  const onByOrderSet = () => {
    if (searchParams.get('byOrder')) {
      delete queries['byOrder']
      setSearchParams(queries)
    } else {
      setSearchParams({ ...queries, byOrder: 'true' })
    }
  };

  const onAgeSet = (data) => {

  };

  const onNotInStockSet = () => {
    if (searchParams.get('amount_lte')) {
      delete queries['amount_lte']
      setSearchParams(queries)
    } else {
      setSearchParams({ ...queries, amount_lte: '0' })
    }
  };

  const onPlayersAmountSet = (data) => {

  };

  const getPrice = () => {
    const min: number = Number(searchParams.get('price_gte')) || 0
    const max: number = Number(searchParams.get('price_lte')) || priceMax
    return [min, max]
  };

  return (
    <div className="search-section">
      <FilterItemAccordion
        title={'Все категории'}
        onClickListener={onAllCategorySet}
        defaultExpanded={true}
        child={
          <>
            {categories.map((categoryEl, i) =>
              <FilterItemAccordion
                key={i}
                title={categoryEl.categoryName}
                onClickListener={(data) => onCategorySet(data)}
                expanded={searchParams.get('category') == categoryEl.categoryName}
                className={`${searchParams.get('category') == categoryEl.categoryName ? 'active' : ''}`}
                child={
                  <div className='sub-categories__list'>
                    {categoryEl.subCategories.map(el =>
                      <div
                        key={el}
                        className={`sub-categories__list__item ${searchParams.get('subCategory') == el ? 'active' : ''}`}
                        onClick={() => onSubCategorySet(categoryEl.categoryName, el)}
                      >
                        {el}
                      </div>
                    )}
                  </div>
                }
              />
            )}
          </>
        }
      />
      <FilterItemAccordion title={'Цена'} defaultExpanded={true} child={<>
        <PriceInputWithSlider
          value={getPrice()}
          setValue={data => onPriceSet(data)}
          maxValue={priceMax}
        />
        <FormControlLabel label="Только со скидкой" control={
          <Checkbox
            checked={!!searchParams.get('sale_gte')}
            onClick={onOnlyWithSaleSet}
            inputProps={{ 'aria-label': 'controlled' }}
          />
        } />
      </>} />
      {/* <FilterItemAccordion
        title={'Возрасты'}
        disabled={true}
        child={
          <PriceInputWithSlider value={age} setValue={data => onAgeSet(data)} maxValue={100} />
        }
      /> */}
      <FilterItemAccordion title={'Наличие'} defaultExpanded={true} child={
        <div className='available-filter-section'>
          <FormControlLabel label="В наличии"
            control={
              <Checkbox
                checked={!!searchParams.get('amount_gte')}
                onClick={onInStockSet}
                inputProps={{ 'aria-label': 'controlled' }}
              />
            }
          />
          <FormControlLabel label="Под заказ"
            control={
              <Checkbox
                checked={!!searchParams.get('byOrder')}
                onClick={onByOrderSet}
                inputProps={{ 'aria-label': 'controlled' }}
              />
            }
          />
          <FormControlLabel label="Нет в наличии"
            control={
              <Checkbox
                checked={!!searchParams.get('notInStock')}
                onClick={onNotInStockSet}
                inputProps={{ 'aria-label': 'controlled' }}
              />
            }
          />
        </div>}
      />
      {/* <FilterItemAccordion
        title={'Количество игроков'}
        disabled={true}
        child={
          <PriceInputWithSlider
            value={playersAmount}
            maxValue={100}
            setValue={data => onPlayersAmountSet(data)}
          />
        }
      /> */}
      <div className="button-wrapper">
        <button className='reset-button' onClick={() => setSearchParams({ price_gte: '0', price_lte: `${priceMax}` })}>Сбросить фильтр</button>
      </div>
    </div>
  );
};

export default SearchPageFilter;