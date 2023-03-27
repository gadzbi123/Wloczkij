import { createContext, useEffect, useState } from "react";
import { API } from "../static/variables";
import { getData } from "../utility/fetch.utility";
export const CategoriesContext = createContext({
  categoryItems: [],
});

export const CategoriesProvider = ({ children }) => {
  const [categoryItems, setCategoryItems] = useState([]);
  useEffect(() => {
    const getCategories = async () => {
      const categories = await getData("/categories");
      setCategoryItems(categories);
    };
    console.log("XD");
    getCategories();
  }, []);

  const value = {
    categoryItems,
  };
  return (
    <CategoriesContext.Provider value={value}>
      {children}
    </CategoriesContext.Provider>
  );
};
