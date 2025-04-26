import { createSlice } from "@reduxjs/toolkit";

// Load cart data from localStorage (if available)
const savedProducts = JSON.parse(localStorage.getItem("cartProducts")) || [];

const initialState = {
  products: savedProducts,
};

const productSlice = createSlice({
  name: "product",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const newItem = action.payload;
      const existingItem = state.products.find(item => item._id === newItem._id);

      if (existingItem) {
        existingItem.quantity += 1;
      } else {
        state.products.push({ ...newItem, quantity: 1 });
      }

      localStorage.setItem("cartProducts", JSON.stringify(state.products));
    },

    incrementQuantity: (state, action) => {
      const productId = action.payload;
      const product = state.products.find(item => item._id === productId);
      if (product) {
        product.quantity += 1;
        localStorage.setItem("cartProducts", JSON.stringify(state.products));
      }
    },

    decrementQuantity: (state, action) => {
      const productId = action.payload;
      const product = state.products.find(item => item._id === productId);
      if (product && product.quantity > 1) {
        product.quantity -= 1;
      } else {
        // remove item if quantity reaches 0 or 1
        state.products = state.products.filter(item => item._id !== productId);
      }
      localStorage.setItem("cartProducts", JSON.stringify(state.products));
    },

    removeFromCart: (state, action) => {
      const productId = action.payload;
      state.products = state.products.filter(product => product._id !== productId);
      localStorage.setItem("cartProducts", JSON.stringify(state.products));
    },

    clearCart: (state) => {
      state.products = [];
      localStorage.setItem("cartProducts", JSON.stringify(state.products));
    },
  },
});

export const {
  addToCart,
  removeFromCart,
  clearCart,
  incrementQuantity,
  decrementQuantity,
} = productSlice.actions;

export default productSlice.reducer;
