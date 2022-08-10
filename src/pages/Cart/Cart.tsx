import React from 'react';
import './Cart.scss';
import { CartSlicer } from '../../store/reducer/CartSlice';
import { useAppDispatch, useAppSelector } from './../../hooks/redux';
import CustomButton from './../../components/Buttons/CustomButtonShop';
import CustomButtonByIOneClick from '../../components/Buttons/CustomButtonByIOneClick';

const Price = React.memo(({ price, sale }) => {
  return (
    <div className="price">
      {<><span className={sale ? 'old-price' : ''}>{price}грн</span> {sale ? <span className='new-price'> {price * (sale / 100)}грн</span> : ''} </>}
    </div>
  )
});

const Amount = React.memo(({ pcs, index }) => {
  const { increaseQuantity, reduceQuantity } = CartSlicer.actions
  const dispatch = useAppDispatch();
  return (
    <>
      <button className='amount-button' onClick={() => dispatch(reduceQuantity(index))}>-</button>
      <span>{pcs} шт</span>
      <button className='amount-button' onClick={() => dispatch(increaseQuantity(index))}>+</button>
    </>
  )
});

const Cart = () => {
  const { items, totalPrice } = useAppSelector(state => state.cartReducer);
  const dispatch = useAppDispatch();
  const { deleteItem } = CartSlicer.actions;

  React.useEffect(() => {
  }, [totalPrice])

  return (
    <div className='cart-page container'>
      <h1>Корзина</h1>
      <div className="content-wrapper">
        <div className="items-list">
          {items.map((el, i) =>
            <div key={el.id} className="items-list__item">
              <div className="image-wrapper">
                <img src={el.photo} alt={el.name} />
              </div>
              <div className="name">{el.name}</div>
              <Price price={el.price} sale={el.sale && el.sale} />
              <Amount pcs={el.pcs} index={i} />
              <button onClick={() => dispatch(deleteItem(i))}>del</button>
            </div>
          )}
        </div>
        <div className="confirmation-section">
          <div className="confirmation-block">
            <span className="totalPrice">Сумма: <span>{totalPrice} грн</span></span>
            <CustomButton buttonText='Оформить' listener={() => console.log('By Items')} />
            <CustomButtonByIOneClick buttonText='Купить в 1 клик' listener={() => console.log('By Items в 1 клик')} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;