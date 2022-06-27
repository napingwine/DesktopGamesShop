import React from 'react';
import PriceInputWithSlider from './Input/FilterInput';
import FilterItemAccordion from './FilterItemAccordion';
import Checkbox from '@mui/material/Checkbox';
import FormControlLabel from '@mui/material/FormControlLabel';
import { useAppSelector } from '../../hooks/redux';
import './SearchPageFilter.scss';
import { useSearchParams } from 'react-router-dom';

const SearchPageFilter = () => {
  const categories = useAppSelector(state => state.categoryReducer.categories);
  const [searchParams, setSearchParams] = useSearchParams();
  const [queryParams, setQueryParams] = React.useState({});
  const [category, setCategory] = React.useState<string>();
  const [subCategory, setSubCategory] = React.useState<string>();
  const [priceSection, setPriceSection] = React.useState({
    price: [0, 50000],
    onlyWithSale: false,
    maxPrice: 50000
  });
  const [age, setAge] = React.useState([0, 100]);
  const [available, setAvailable] = React.useState({
    inStock: false,
    byOrder: false,
    notInStock: false
  });
  const [playersAmount, setPlayersAmount] = React.useState([0, 100]);

  React.useEffect(() => {
    setSearchParams(queryParams)
  }, [queryParams]);

  const onAllCategorySet = () => {
    setQueryParams((prev) => delete prev['category'])
    setCategory('');
    setSubCategory('')
  };

  const onCategorySet = (data) => {
    setQueryParams((prev) => delete prev['subCategory'])
    setQueryParams(prev => ({ ...prev, category: data }))
    setCategory(data)
    setSubCategory('')
  };

  const onSubCategorySet = (category, subCategory) => {
    setQueryParams(prev => ({ ...prev, category: category, subCategory: subCategory }))
    setCategory(category)
    setSubCategory(subCategory)
  };

  const onPriceSet = (data) => {
    setQueryParams(prev => ({ ...prev, price_gte: data[0], price_lte: data[1] }))
    setPriceSection(prev => ({ ...prev, price: data }))
  };

  const onOnlyWithSaleSet = () => {
    if (searchParams.get('sale_gte')) {
      setQueryParams(prev => delete prev['sale_gte'])
      setPriceSection(prev => ({ ...prev, onlyWithSale: false }))
    } else {
      setQueryParams(prev => ({ ...prev, sale_gte: 1 }))
      setPriceSection(prev => ({ ...prev, onlyWithSale: true }))
    }
  };

  const onAgeSet = (data) => {
    setQueryParams(prev => ({ ...prev, age_gte: data[0], age_lte: data[1] }))
    setAge(data)
  };

  const onInStockSet = () => {
    if (searchParams.get('amount_gte')) {
      setQueryParams(prev => delete prev['amount_gte'])
      setAvailable(prev => ({ ...prev, inStock: false }))
    } else {
      setQueryParams(prev => ({ ...prev, amount_gte: 1 }))
      setAvailable(prev => ({ ...prev, inStock: true }))
    }
  };

  const onByOrderSet = () => {
    if (searchParams.get('byOrder')) {
      setQueryParams(prev => delete prev['byOrder'])
      setAvailable(prev => ({ ...prev, byOrder: false }))
    } else {
      setQueryParams(prev => ({ ...prev, byOrder: true }))
      setAvailable(prev => ({ ...prev, byOrder: true }))
    }
  };

  const onNotInStockSet = () => {
    if (searchParams.get('amount_lte')) {
      setQueryParams(prev => delete prev['amount_lte'])
      setAvailable(prev => ({ ...prev, notInStock: false }))
    } else {
      setQueryParams(prev => ({ ...prev, amount_lte: 0 }))
      setAvailable(prev => ({ ...prev, notInStock: true }))
    }
  };

  const onPlayersAmountSet = (data) => {
    setQueryParams(prev => ({ ...prev, age_gte: data[0], age_lte: data[1] }))
    setPlayersAmount(data)
  };

  return (
    <div className="search-section">
      <FilterItemAccordion
        title={'Все категории'}
        onClickListener={onAllCategorySet}
        child={
          <>
            {categories.map((categoryEl, i) =>
              <FilterItemAccordion
                key={i}
                title={categoryEl.categoryName}
                onClickListener={(data) => onCategorySet(data)}
                className={`${category == categoryEl.categoryName ? 'active' : ''}`}
                child={
                  <div className='sub-categories__list'>
                    {categoryEl.subCategories.map(el =>
                      <div
                        key={el}
                        className={`sub-categories__list__item ${subCategory == el ? 'active' : ''}`}
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
      <FilterItemAccordion title={'Цена'} child={<>
        <PriceInputWithSlider
          value={priceSection.price}
          setValue={data => onPriceSet(data)}
          maxValue={priceSection.maxPrice}
        />
        <FormControlLabel label="Только со скидкой" control={
          <Checkbox
            checked={priceSection.onlyWithSale}
            onClick={onOnlyWithSaleSet}
            inputProps={{ 'aria-label': 'controlled' }}
          />
        } />
      </>} />
      <FilterItemAccordion
        title={'Возрасты'}
        child={
          <PriceInputWithSlider value={age} setValue={data => onAgeSet(data)} maxValue={100} />
        }
      />
      <FilterItemAccordion title={'Наличие'} child={
        <div className='available-filter-section'>
          <FormControlLabel label="В наличии"
            control={
              <Checkbox
                checked={available.inStock}
                onClick={onInStockSet}
                inputProps={{ 'aria-label': 'controlled' }}
              />
            }
          />
          <FormControlLabel label="Под заказ"
            control={
              <Checkbox
                checked={available.byOrder}
                onClick={onByOrderSet}
                inputProps={{ 'aria-label': 'controlled' }}
              />
            }
          />
          <FormControlLabel label="Нет в наличии"
            control={
              <Checkbox
                checked={available.notInStock}
                onClick={onNotInStockSet}
                inputProps={{ 'aria-label': 'controlled' }}
              />
            }
          />
        </div>}
      />
      <FilterItemAccordion
        title={'Количество игроков'}
        child={
          <PriceInputWithSlider
            value={playersAmount}
            maxValue={100}
            setValue={data => onPlayersAmountSet(data)}
          />
        }
      />
      <div className="button-wrapper">
        <button className='reset-button' onClick={() => setSearchParams({})}>Сбросить фильтр</button>
      </div>
    </div>
  );
};

export default SearchPageFilter;