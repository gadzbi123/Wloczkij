import { useNavigate } from "react-router-dom";
import { CategoryPreviewContainer } from "./categoryPreview.styles";
const CategoryPreview = ({ category: { id, imageUrl, title, amount } }) => {
  const navigate = useNavigate();
  const handleClick = () => navigate(`/shop/${title}`);
  return (
    <CategoryPreviewContainer onClick={handleClick}>
      <img src={imageUrl} alt={title} />
      <div className="category-title-box">
        <h2>{title}</h2>
        <h3>({amount})</h3>
      </div>
    </CategoryPreviewContainer>
  );
};
export default CategoryPreview;
