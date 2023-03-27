import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getProductsSelector } from "../../store/products/products.selector";
import CategoryItem from "../category-item/category-item.component";
const Category = () => {
  const { category } = useParams();
  const allProducts = useSelector(getProductsSelector);
  const [products, setProducts] = useState([]);

  useEffect(() => {
    setProducts(allProducts.filter((product) => product.category === category));
  }, [allProducts, category]);

  return (
    <>
      <h2>{category}</h2>
      {products.map((product) => (
        <CategoryItem key={product.id} product={product} />
      ))}
    </>
  );
};
export default Category;
