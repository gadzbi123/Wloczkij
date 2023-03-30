import { useState } from "react";
import { ModalContainer, ProductItemContainer } from "./product-item.styles";

const ProductItem = ({ product: { title, imageUrl, id, description } }) => {
  const [modalIsClosed, setModalIsClosed] = useState(true);

  const closeModal = (e) => {
    if (e.target.className.includes(ModalContainer.styledComponentId))
      setModalIsClosed(true);
  };

  return (
    <>
      <ProductItemContainer
        className={id % 2 ? "different" : ""}
        onClick={() => setModalIsClosed(false)}>
        <img src={imageUrl} alt={title} />
        <h3>{title}</h3>
      </ProductItemContainer>
      {!modalIsClosed && (
        <ModalContainer onClick={(e) => closeModal(e)}>
          <div className="modal-box">
            <div className="image-box">
              <img src={imageUrl} alt={title} />
            </div>
            <h3>{title}</h3>
            <p>{description}</p>
          </div>
        </ModalContainer>
      )}
    </>
  );
};
export default ProductItem;
