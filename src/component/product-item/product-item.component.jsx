import { ProductItemContainer, ItemDetail } from "./product-item-styles";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from "react-router-dom";

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
      <td>
        <Link to={`/product/${id}`} state={productItem}>
          Product Detail
        </Link>
      </td>
    </tr>
  );
};

export default ProductItem;
