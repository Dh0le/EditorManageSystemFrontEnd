import { ProductItemContainer, ItemDetail } from "./product-item-styles";
import "bootstrap/dist/css/bootstrap.min.css";

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
    <tr>
      <td>{productName}</td>
      <td>{nextDueDate}</td>
      <td>{status}</td>
    </tr>
  );
};

export default ProductItem;
