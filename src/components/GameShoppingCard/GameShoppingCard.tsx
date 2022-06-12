import React, { FC } from 'react';
import './GameShoppingCard.scss';
import CustomButtonShop from '../../components/Buttons/CustomButton'
import CustomButtonByIOneClick from '../../components/Buttons/CustomButtonByIOneClick';
import IGameShoppingCard from '../../models/IGameShoppingCard';
import audienceIMG from '../../assets/Icons/audience.png';
import clockIMG from '../../assets/Icons/Clock.png';

const GameShoppingCard: FC<IGameShoppingCard> = ({ addToCart, price, sale, title, audience, estimatedGameTime, age, photoURL, byInOneClick }) => {

  return (
    <div className='GameShoppingCard'>
      <div className="GameShoppingCard__imageWrapper">
        {sale !== 0 && <span className="GameShoppingCard__imageWrapper__sale">-{sale}%</span>}
        <img src={photoURL} alt="image" />
      </div>
      <div className="GameShoppingCard__infoGroup">
        <div className="GameShoppingCard__infoGroup__audience"><img src={audienceIMG} />{audience}</div>
        <div className="GameShoppingCard__infoGroup__estimatedGameTime"><img src={clockIMG} />{estimatedGameTime}</div>
        <div className="GameShoppingCard__infoGroup__age">{age}</div>
      </div>
      <p className="GameShoppingCard__name" title={title}>{title}</p>
      <div className="GameShoppingCard__price">
        <div className={`GameShoppingCard__price__without-sale ${sale !==0 && 'old-price'}`}>{price}</div>
        {sale !== 0 && <div className="GameShoppingCard__price__with-sale">{Math.round(price - (price * (sale / 100)))}</div>}
      </div>
      <div className="GameShoppingCard__buttonSection">
        <CustomButtonShop buttonText={'В корзину'} listener={addToCart} />
        <CustomButtonByIOneClick buttonText={'Купить в 1 клик'} listener={byInOneClick} />
      </div>
    </div>
  );
};

export default GameShoppingCard;