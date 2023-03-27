import { combineReducers } from "@reduxjs/toolkit";
import { categoriesReducer } from "./categories/categories.reducer";
import { productsReducer } from "./products/products.reducer";
export const rootReducer = combineReducers({
  categories: categoriesReducer,
  products: productsReducer,
});
