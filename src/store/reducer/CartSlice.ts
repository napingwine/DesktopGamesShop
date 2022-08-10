import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface ICartItem {
  id: number
  name: string
  photo: string
  pcs: number
  sale?: number
  price: number
};

interface ICartState {
  items: ICartItem[],
  totalPrice: number
};

const initialState: ICartState = {
  items: [],
  totalPrice: 0
};

export const CartSlicer = createSlice({
  name: 'category',
  initialState,
  reducers: {
    addItemToCart(state, action: PayloadAction<ICartItem>) {
      state.items = [...state.items, action.payload];
      let initialPrice: number = 0;
      console.log(state.items.reduce((prev, cur) => {
        if (cur.sale) {
          return prev + cur.price * cur.sale
        } else {
          return prev + cur.price
        }
      }, initialPrice))
    },
    increaseQuantity(state, action: PayloadAction<number>) {
      state.items[action.payload].pcs++;
    },
    reduceQuantity(state, action: PayloadAction<number>) {
      state.items[action.payload].pcs--;
    },
    deleteItem(state, action: PayloadAction<number>) {
      state.items.splice(action.payload, 1);
    }
  },
})

export default CartSlicer.reducer;