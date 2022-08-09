import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface ICartItem {
  id: number
  name: string
  photo: string
  pcs: number
  sale?:number
  price: number
}

interface ICartState {
  items:ICartItem[],
  totalPrice:number
}

const initialState: ICartState = {
  items: [{
    id: 1,
    name: 'Сonsequuntur sint nihil dolor dolores error temporibus vero',
    photo: 'http://localhost:5000/shoppingCardImages/6.png',
    pcs: 1,
    sale: 1,
    price: 1000000
  }],
  totalPrice: 0
}

export const CartSlicer = createSlice({
  name: 'category',
  initialState,
  reducers: {
    addItemToCart(state, action:PayloadAction<ICartItem>){
      state.items = [...state.items, action.payload];
    },
    increaseQuantity(state, action:PayloadAction<number>){
      state.items[action.payload].pcs++;            
    },
    reduceQuantity(state, action:PayloadAction<number>){
      state.items[action.payload].pcs--;  
    },
    deleteItem(state, action:PayloadAction<number>){
      state.items.splice(action.payload,1);
    }
  },
})

export default CartSlicer.reducer;