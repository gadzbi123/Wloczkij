import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getProductsSelector } from "../../store/products/products.selector";
import ProductItem from "../product-item/product-item.component";
import { CategoryContainer } from "./categoryWithProducts.styles";
const CategoryWithProducts = () => {
  const { category } = useParams();
  const allProducts = useSelector(getProductsSelector);
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const filtered = allProducts.filter(
      (product) => product.category === category
    );
    setProducts(filtered);
  }, [allProducts, category]);

  return (
    <CategoryContainer>
      <h2>{category}</h2>
      <div className="products">
        {products.map((product) => (
          <ProductItem key={product.id} product={product} />
        ))}
      </div>
    </CategoryContainer>
  );
};
export default CategoryWithProducts;
