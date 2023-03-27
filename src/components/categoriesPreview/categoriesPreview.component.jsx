import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { setCategories } from "../../store/categories/categories.reducer";
import { getCategoriesSelector } from "../../store/categories/categories.selector";
import { getData } from "../../utility/fetch.utility";
import CategoryPreview from "../categoryPreview/categoryPreview.component";
import { CategoriesPreviewContainer } from "./categoriesPreview.styles";
const CategoriesPreview = () => {
  const categories = useSelector(getCategoriesSelector);
  const dispatch = useDispatch();
  useEffect(() => {
    const getCategories = async () => {
      const categoriesData = await getData("/categories");
      dispatch(setCategories(categoriesData));
    };
    getCategories();
  }, []);
  return (
    <CategoriesPreviewContainer>
      {categories &&
        categories.map((category) => {
          return <CategoryPreview key={category.id} category={category} />;
        })}
    </CategoriesPreviewContainer>
  );
};
export default CategoriesPreview;
