import { createSelector } from "reselect";
export const ProductsSelectorReducer = (state) => state.products.products;

export const getProductsSelector = createSelector(
  [ProductsSelectorReducer],
  (products) => products
);
