import { createContext, useEffect, useState } from "react";
import { API } from "../static/variables";
export const CategoriesContext = createContext({
  categoryItems: [],
});

export const CategoriesProvider = ({ children }) => {
  const [categoryItems, setCategoryItems] = useState([]);
  useEffect(() => {
    const setCategories = async () => {
      const promise = await fetch(API + "/categories");
      const data = await promise.json();
      setCategoryItems(data);
    };
    setCategories();
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
