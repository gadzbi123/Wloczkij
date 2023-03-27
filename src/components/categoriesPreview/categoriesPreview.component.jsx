import { useDispatch, useSelector } from "react-redux";
import { getCategoriesSelector } from "../../store/categories/categories.selector";
import CategoryPreview from "../categoryPreview/categoryPreview.component";
import { CategoriesPreviewContainer } from "./categoriesPreview.styles";
const CategoriesPreview = () => {
  const categories = useSelector(getCategoriesSelector);

  return (
    <CategoriesPreviewContainer>
      {categories &&
        categories.map((category) => (
          <CategoryPreview key={category.id} category={category} />
        ))}
    </CategoriesPreviewContainer>
  );
};
export default CategoriesPreview;
