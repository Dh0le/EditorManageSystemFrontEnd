import { ProductItemContainer, ItemDetail } from "./product-item-styles";

const ProductItem = ({ productItem }) => {
  const {
    id,
    productName,
    totalSub,
    nextDueDate,
    status,
    paidAmount,
    paymentMethod,
    authorId,
    editorID,
  } = productItem;

  return (
    <ProductItemContainer>
      <ItemDetail>
        <span>{productName}</span>
        <span>{nextDueDate}</span>
        <span>{status}</span>
      </ItemDetail>
    </ProductItemContainer>
  );
};

export default ProductItem;
