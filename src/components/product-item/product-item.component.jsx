import { ProductItemContainer } from "./product-item.styles";
const ProductItem = ({ product: { title, imageUrl, id } }) => {
  return (
    <ProductItemContainer className={id % 2 ? "different" : ""}>
      <img src={imageUrl} alt={title} />
      <h3>{title}</h3>
    </ProductItemContainer>
  );
};
export default ProductItem;
