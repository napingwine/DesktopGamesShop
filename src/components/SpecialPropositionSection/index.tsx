import React, { FC, useEffect, useState } from 'react';
import GameShoppingCard from '../GameShoppingCard/GameShopingCard';
import useWindowDimensions from '../../hooks/useWindowDimensions';
import swipeListener from '../../helpers/swipeListener';
import { IQueryParams } from '../../models/IQueryParams';
import './SpecialPropositionSection.scss';

interface ISpecialPropositionSection {
  sectionTitle: string,
  addToCart: () => void,
  byInOneClick: () => void,
  apiWithQuery: any,
  queryParams?: IQueryParams
}

const SpecialPropositionSection: FC<ISpecialPropositionSection> = ({ sectionTitle, addToCart, byInOneClick, apiWithQuery, queryParams }) => {
  const [limit, setLimit] = useState(4);
  const [goodsPage, setGoodsPage] = useState(1);
  const [visible, setVisible] = useState('invisible');
  const [prevBtnDisable, setPrevBtnDisable] = useState('disable');
  const [nextBtnDisable, setNextBtnDisable] = useState('');
  const [goods, setGoods] = useState([]);
  const [totalPagesCount, setTotalPagesCount] = useState(1);

  const { error, isLoading, data } = apiWithQuery({ _limit: limit, _page: goodsPage, ...queryParams });
  const { width: windowWidth } = useWindowDimensions();
  const swipeListener1 = new swipeListener();

  useEffect(() => {
    if (data) {
      let { apiResponse: goods, totalCount } = data;
      setGoods(goods)
      setTotalPagesCount(Math.round(totalCount / limit))
    }
  }, [data]);

  useEffect(() => {
    if (windowWidth > 1220) {
      setLimit(4)
    } else if (windowWidth < 1219 && windowWidth > 900) {
      setLimit(3)
    } else if (windowWidth < 899 && windowWidth > 600) {
      setLimit(2)
    } else {
      setLimit(1)
    }
  }, [windowWidth]);

  const onPrev = () => {
    goodsPage === (2) && setPrevBtnDisable('disable');
    if (goodsPage === 1) {
      return
    } else {
      setVisible('from-right')
      setGoodsPage(prev => (prev - 1))
      setTimeout(() => setVisible('from-left'), 150)
      setTimeout(() => setVisible('visible'), 300)
      setNextBtnDisable('')
    }
  };

  const onNext = () => {
    goodsPage === (totalPagesCount - 1) && setNextBtnDisable('disable');
    if (goodsPage === totalPagesCount) {
      return
    } else {
      setVisible('from-left')
      setGoodsPage(prev => (prev + 1))
      setTimeout(() => setVisible('from-right'), 150)
      setTimeout(() => setVisible('visible'), 300)
      setPrevBtnDisable('')
    }
  };

  return (
    <div className="container special-proposition-section">
      <div className="special-proposition-section__title">{sectionTitle}</div>
      <div className="special-proposition-section__wrapper">
        <span className={`special-proposition-section__prev-btn ${prevBtnDisable}`} onClick={onPrev}><span /></span>
        <div className={`special-proposition-section__goods__list ${visible}`} onTouchStart={e => swipeListener1.touchstart(e)} onTouchEnd={e => swipeListener1.touchend(e, onNext, onPrev)}>
          {isLoading && <h1>... IS LOADING</h1>}
          {error && <h1> Error... </h1>}
          {goods && goods.map(goods => <GameShoppingCard key={goods.id} {...goods} addToCart={addToCart} byInOneClick={byInOneClick} />)}
        </div>
        <span className={`special-proposition-section__next-btn ${nextBtnDisable}`} onClick={onNext}><span /></span>
      </div>
    </div>
  )
};

export default SpecialPropositionSection;