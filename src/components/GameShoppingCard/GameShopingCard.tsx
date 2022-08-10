import React, { FC } from 'react';
import './GameShoppingCard.scss';
import CustomButtonShop from '../Buttons/CustomButton';
import CustomButtonByIOneClick from '../Buttons/CustomButtonByIOneClick';
import IGameShoppingCard from '../../models/IGameShoppingCard';
import audienceIMG from '../../assets/Icons/audience.png';
import clockIMG from '../../assets/Icons/Clock.png';
import { useAppDispatch } from '../../hooks/redux';
import { CartSlicer } from '../../store/reducer/CartSlice';

const GameShoppingCard: FC<IGameShoppingCard> = ({ price, sale, title, audience, estimatedGameTime, age, photoURL, id, amount }) => {
  const dispatch = useAppDispatch();
  const { addItemToCart } = CartSlicer.actions

  const byInOneClick = () => {
  };

  const addToCart = () => {
    let item = { id, name: title, photo: photoURL, pcs: 1, price, sale:0 }
    if(sale)item.sale=sale
    dispatch(addItemToCart(item));
  };

  return (
    <div className='GameShoppingCard'>
      <div className="GameShoppingCard__imageWrapper">
        {sale !== 0 && <span className="GameShoppingCard__imageWrapper__sale">-{sale}%</span>}
        <img src={photoURL} alt="image" />
      </div>
      <div className="GameShoppingCard__infoGroup">
        <div className="GameShoppingCard__infoGroup__audience"><img src={audienceIMG} />{audience[0]}-{audience[1]} чел</div>
        <div className="GameShoppingCard__infoGroup__estimatedGameTime"><img src={clockIMG} />{estimatedGameTime[0]}-{estimatedGameTime[1]} мин</div>
        <div className="GameShoppingCard__infoGroup__age">{age.length == 1 ? `${age[0]}+ лет` : `${age[0]}-${age[1]} лет`}</div>
      </div>
      <p className="GameShoppingCard__name" title={title}>{title}</p>
      <div className="GameShoppingCard__price">
        <div className={`GameShoppingCard__price__without-sale ${sale !== 0 && 'old-price'}`}>{price} грн</div>
        {sale !== 0 && <div className="GameShoppingCard__price__with-sale">{Math.round(price - (price * (sale / 100)))} грн</div>}
      </div>
      <div className="GameShoppingCard__buttonSection">
        <CustomButtonShop buttonText={'В корзину'} listener={addToCart} />
        <CustomButtonByIOneClick buttonText={'Купить в 1 клик'} listener={byInOneClick} />
      </div>
    </div>
  );
};

export default GameShoppingCard;