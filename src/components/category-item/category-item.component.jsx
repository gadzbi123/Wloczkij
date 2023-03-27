const CategoryItem = ({ product: { title, imageUrl, id } }) => {
  return (
    <div className="category-item">
      <img src={require(imageUrl).default} alt={title} />
      <h3>{title}</h3>
    </div>
  );
};
export default CategoryItem;
