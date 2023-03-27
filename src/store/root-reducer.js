import { combineReducers } from "@reduxjs/toolkit";
import { categoriesReducer } from "./categories/categories.reducer";
export const rootReducer = combineReducers({
  categories: categoriesReducer,
});
