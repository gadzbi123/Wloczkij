import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { Route, Routes } from "react-router-dom";
import CategoriesPreview from "../../components/categoriesPreview/categoriesPreview.component";
import CategoryWithProducts from "../../components/categoryWithProducts/categoryWithProducts.component";
import { setCategories } from "../../store/categories/categories.reducer";
import { setProducts } from "../../store/products/products.reducer";
import { getCollectionAndDocuments } from "../../utility/firebase.utility";

const Shop = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    const getCategoriesAndProducts = async () => {
      const categoriesData = await getCollectionAndDocuments("categories");
      dispatch(setCategories(categoriesData));
      const productsData = await getCollectionAndDocuments("products");
      dispatch(setProducts(productsData));
    };
    getCategoriesAndProducts();
  }, []);

  return (
    <Routes>
      <Route index element={<CategoriesPreview />} />
      <Route path=":category" element={<CategoryWithProducts />} />
    </Routes>
  );
};
export default Shop;
