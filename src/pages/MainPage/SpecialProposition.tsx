import React, { useEffect, useState } from 'react';
import GameShoppingCard from '../../components/GameShoppingCard/GameShoppingCard';
import { goodsAPI } from '../../services/SpecialPropositionService';

const SpecialProposition = () => {
  const limit = 4;
  const [goodsPage, setGoodsPage] = useState(1);
  const { error, isLoading, data: goods } = goodsAPI.useFetchAllGoodsQuery({ limit: limit, page: goodsPage });
  const [visible, setVisible] = useState('invisible');

  const [prevBtnDisable, setPrevBtnDisable] = useState('disable')
  const [nextBtnDisable, setNextBtnDisable] = useState('')

  const addToCart = () => {
    console.log(1)
  };

  const byInOneClick = () => {
    console.log(12)
  };

  useEffect(()=>{
    goodsPage == 1 ? setPrevBtnDisable('disable') : setPrevBtnDisable('');
    if(goods?.length == 0 ){
      setGoodsPage(1)
    } 
  }, [goodsPage, goods])

  const onPrev = () => {
    if (goodsPage > 1) {
      setVisible('from-right')
      setGoodsPage(prev => (prev - 1))
      setTimeout(() => setVisible('from-left'), 150)
      setTimeout(() => setVisible('visible'), 300)
      setPrevBtnDisable('')
    } else {
      setNextBtnDisable('')
      setPrevBtnDisable('disable')
      setGoodsPage(prev => prev)
    }
  }

  const onNext = () => {
    if (goods.length == 0) {
      setGoodsPage(prev => (prev));
    } else {
      setPrevBtnDisable('')
      setVisible('from-left')
      setGoodsPage(prev => (prev + 1))
      setTimeout(() => setVisible('from-right'), 150)
      setTimeout(() => setVisible('visible'), 300)
    }
  }

  return (
    <div className="container special-proposition-section">
      <div className={`special-proposition-section__prev-btn ${prevBtnDisable}`} onClick={onPrev}>prev page</div>
      <div className={`special-proposition-section__goods__list ${visible}`}>
        {isLoading && <h1>... IS LOADING</h1>}
        {error && <h1> Error... </h1>}
        {goods && goods.map(goods => <GameShoppingCard key={goods.id} {...goods} addToCart={addToCart} byInOneClick={byInOneClick} />)}
      </div>
      <div className={`special-proposition-section__next-btn ${nextBtnDisable}`} onClick={onNext}>next page</div>
    </div>
  )
};

export default SpecialProposition;