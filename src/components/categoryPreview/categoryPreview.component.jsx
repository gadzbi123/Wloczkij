const CategoryPreview = ({ category }) => {
  return (
    <div key={category.id}>
      <img src={category.imageUrl} alt={category.title}></img>
      <h2>{category.title}</h2>
      <h2>{category.amount}</h2>
    </div>
  );
};
export default CategoryPreview;
