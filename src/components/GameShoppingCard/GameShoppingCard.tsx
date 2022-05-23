import React, { FC } from 'react';
import './GameShoppingCard.scss';
import CustomButtonShop from '../buttons/CustomButtonShop';
import CustomButtonByIOneClick from '../buttons/CustomButtonByIOneClick';
import IGameShoppingCard from '../../models/IGameShoppingCard';
import audienceIMG from '../../assets/Icons/audience.png';
import clockIMG from '../../assets/Icons/Clock.png';

const GameShoppingCard: FC<IGameShoppingCard> = ({addToCart, price, name, audience, estimatedGameTime, age, photoURL, byInOneClick}) => {
  return (
    <div className='GameShoppingCard'>
      <div className="GameShoppingCard__imageWrapper">
        <img src={photoURL} alt="image" />
      </div>
      <div className="GameShoppingCard__infoGroup">
        <div className="GameShoppingCard__infoGroup__audience"><img src={audienceIMG}/>{audience}</div>
        <div className="GameShoppingCard__infoGroup__estimatedGameTime"><img src={clockIMG}/>{estimatedGameTime}</div>
        <div className="GameShoppingCard__infoGroup__age">{age}</div>
      </div>
      <p className="GameShoppingCard__name" title={name}>{name}</p>
      <div className="GameShoppingCard__price">{price}</div>
      <div className="GameShoppingCard__buttonSection">
      <CustomButtonShop buttonText={'В корзину'} listener={addToCart} />
      <CustomButtonByIOneClick buttonText={'Купить в 1 клик'} listener={byInOneClick} />
      </div>
    </div>
  );
};

export default GameShoppingCard;