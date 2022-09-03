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
  totalPrice: number,
  totalItemsAmount: number
};

const initialState: ICartState = {
  items: [],
  totalPrice: 0,
  totalItemsAmount: 0
};

const calculateTotalItemsAndPrice = (state: any) => {
  const newItems = [...state.items];
  const { amount, price } = newItems.reduce((acc, cur) => {
    acc.amount += cur.pcs;
    if (cur.sale) {
      acc.price += cur.price * (cur.sale / 100) * cur.pcs;
    } else {
      acc.price += cur.price * cur.pcs;
    }
    return acc;
  }, { amount: 0, price: 0 });
  state.totalItemsAmount = amount;
  state.totalPrice = price;
};

export const CartSlicer = createSlice({
  name: 'category',
  initialState,
  reducers: {
    addItemToCart(state, action: PayloadAction<ICartItem>) {
      const itemIndex = state.items.findIndex(el => el.id === action.payload.id);
      if (itemIndex >= 0) {
        state.items = state.items.map(el => el.id === action.payload.id ? { ...el, pcs: el.pcs += 1 } : el);
      } else {
        state.items = [...state.items, action.payload];
      };
      calculateTotalItemsAndPrice(state);
    },
    increaseQuantity(state, action: PayloadAction<number>) {
      const index = state.items.findIndex(el => el.id === action.payload);
      state.items[index].pcs++;
      calculateTotalItemsAndPrice(state);
    },
    reduceQuantity(state, action: PayloadAction<number>) {
      const index = state.items.findIndex(el => el.id === action.payload);
      if (state.items[index].pcs > 1) {
        state.items[index].pcs--;
      } else {
        state.items = [...state.items].filter(el => el.id !== action.payload);
      };
      calculateTotalItemsAndPrice(state);
    },
    deleteItem(state, action: PayloadAction<number>) {
      state.items = [...state.items].filter(el => el.id !== action.payload);
      calculateTotalItemsAndPrice(state);
    }
  },
});

export default CartSlicer.reducer;