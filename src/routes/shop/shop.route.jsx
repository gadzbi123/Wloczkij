import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { Route, Routes } from "react-router-dom";
import CategoriesPreview from "../../components/categoriesPreview/categoriesPreview.component";
import CategoryWithProducts from "../../components/categoryWithProducts/categoryWithProducts.component";
import { setCategories } from "../../store/categories/categories.reducer";
import { setProducts } from "../../store/products/products.reducer";
import { getData } from "../../utility/fetch.utility";
const Shop = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    const getCategories = async () => {
      const categoriesData = await getData("/categories");
      dispatch(setCategories(categoriesData));
    };
    getCategories();
  }, []);
  useEffect(() => {
    const getProducts = async () => {
      const productsData = await getData("/products");
      dispatch(setProducts(productsData));
    };
    getProducts();
  }, []);
  return (
    <Routes>
      <Route index element={<CategoriesPreview />} />
      <Route path=":category" element={<CategoryWithProducts />} />
    </Routes>
  );
};
export default Shop;
