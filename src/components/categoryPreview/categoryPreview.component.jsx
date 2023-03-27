import { CategoryPreviewContainer } from "./categoryPreview.styles";
const CategoryPreview = ({ category: { id, imageUrl, title, amount } }) => {
  return (
    <CategoryPreviewContainer>
      <img src={imageUrl} alt={title} />
      <div className="category-title-box">
        <h2>{title}</h2>
        <h3>({amount})</h3>
      </div>
    </CategoryPreviewContainer>
  );
};
export default CategoryPreview;
