import { Route, Routes } from "react-router-dom";
import CategoriesPreview from "../../components/categoriesPreview/categoriesPreview.component";
import Category from "../../components/categoryPreview/categoryPreview.component";
const Shop = () => {
  return (
    <Routes>
      <Route index element={<CategoriesPreview />} />
      <Route path=":category" element={<Category />} />
    </Routes>
  );
};
export default Shop;
