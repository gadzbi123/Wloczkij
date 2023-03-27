import { createSelector } from "reselect";
import { ProductsSelectorReducer } from "../products/products.selector";
const CategoriesSelectorReducer = (state) => state.categories.categories;

export const getCategoriesSelector = createSelector(
  [CategoriesSelectorReducer, ProductsSelectorReducer],
  (categories, products) =>
    categories.map((category) => {
      const amount = products.reduce((count, product) => {
        if (product.category === category.title) {
          count++;
        }
        return count;
      }, 0);
      return { ...category, amount };
    })
);
export const getCategoriesMapSelector = createSelector(
  [CategoriesSelectorReducer],
  (categories) => {
    const categoriesMap = categories.reduce(
      (acc, category) => (acc[category.title] = { ...category }),
      {}
    );
    return categoriesMap;
  }
);
