import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  products: [],
  totalItems: 0,
  totalPrice: 0,
};

const productSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    updataProducts: (state, action) => {
       state.products = action.payload
    },
    addToCart: (state, action) => {
      console.log("after dispatch", action.payload);
      const { id, image, price, title } = action.payload;
      const existingProduct = state.products.find((product) => product.id === id);
      console.log("after dispatch2", action.payload);

      if (existingProduct) {
        existingProduct.quantity++;
      } else {
        state.products.push({ id, image, price, title, quantity: 1 });
      }
      state.totalItems++;
      state.totalPrice += price;
    },
    removeFromCart: (state, action) => {
      
    },
  },
});

export const { addToCart, removeFromCart, updataProducts } = productSlice.actions;

export default productSlice.reducer;