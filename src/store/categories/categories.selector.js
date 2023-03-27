import { createSelector } from "reselect";
const categoriesSelector = (state) => state.categories.categories;

export const getCategoriesSelector = createSelector(
  [categoriesSelector],
  (categories) => categories
);
