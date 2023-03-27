import { createSlice } from "@reduxjs/toolkit";

const INITIAL_STATE = { products: [] };

const productsSlice = createSlice({
  name: "products",
  initialState: INITIAL_STATE,
  reducers: {
    setProducts(state, action) {
      state.products = action.payload;
    },
  },
});

export const { setProducts } = productsSlice.actions;
export const productsReducer = productsSlice.reducer;
