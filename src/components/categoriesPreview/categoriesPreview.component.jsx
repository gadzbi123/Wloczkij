import { useContext } from "react";
import { CategoriesContext } from "../../contexts/categories.context";
import { CategoriesPreviewContainer } from "./categoriesPreview.styles";
import CategoryPreview from "../categoryPreview/categoryPreview.component";

const CategoriesPreview = () => {
  const { categoryItems } = useContext(CategoriesContext);
  return (
    <CategoriesPreviewContainer>
      {categoryItems.map((category) => {
        console.log("makeCategory");
        return <CategoryPreview key={category.id} category={category} />;
      })}
    </CategoriesPreviewContainer>
  );
};
export default CategoriesPreview;
