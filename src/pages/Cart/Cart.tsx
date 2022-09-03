import React from 'react';
import './Cart.scss';
import { CartSlicer } from '../../store/reducer/CartSlice';
import { useAppDispatch, useAppSelector } from './../../hooks/redux';
import CustomButton from './../../components/Buttons/CustomButtonShop';
import CustomButtonByIOneClick from '../../components/Buttons/CustomButtonByIOneClick';

const Price = React.memo<{ price: number, sale: number, amount: number }>(({ price, sale, amount }) => {
  const salePrice = () => (price * (sale / 100) * amount).toFixed(2)
  return (
    <div className="price">
      {<><span className={sale ? 'old-price' : ''}>{price * amount}грн</span> {sale > 0 ? <span className='new-price'> {salePrice()}грн</span> : ''} </>}
    </div>
  )
});

const Amount = React.memo<{ pcs: number, id: number }>(({ pcs, id }) => {
  const { increaseQuantity, reduceQuantity } = CartSlicer.actions
  const dispatch = useAppDispatch();
  return (
    <>
      <button className='amount-button' onClick={() => dispatch(reduceQuantity(id))}>-</button>
      <span>{pcs} шт</span>
      <button className='amount-button' onClick={() => dispatch(increaseQuantity(id))}>+</button>
    </>
  )
});

const Cart = () => {
  const { items, totalPrice } = useAppSelector(state => state.cartReducer);
  const dispatch = useAppDispatch();
  const { deleteItem } = CartSlicer.actions;

  return (
    <div className='cart-page container'>
      <h1>Корзина</h1>
      <div className="content-wrapper">
        <div className="items-list">
          {items.map(el =>
            <div key={el.id} className="items-list__item">
              <div className="image-wrapper">
                <img src={el.photo} alt={el.name} />
              </div>
              <div className="name">{el.name}</div>
              <Price price={el.price} sale={el.sale ? el.sale : 0} amount={el.pcs} />
              <Amount pcs={el.pcs} id={el.id} />
              <button onClick={() => dispatch(deleteItem(el.id))}>del</button>
            </div>
          )}
        </div>
        <div className="confirmation-section">
          <div className="confirmation-block">
            <span className="totalPrice">Сумма: <span>{totalPrice.toFixed(2)} грн</span></span>
            <CustomButton buttonText='Оформить' listener={() => console.log('By Items')} />
            <CustomButtonByIOneClick buttonText='Купить в 1 клик' listener={() => console.log('By Items в 1 клик')} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;