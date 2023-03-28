const CategoryItem = ({ product: { title, imageUrl, id } }) => {
  return (
    <div className="category-item">
      <img src={imageUrl} alt={title} /> {/*error + */}
      <h3>{title}</h3>
    </div>
  );
};
export default CategoryItem;
