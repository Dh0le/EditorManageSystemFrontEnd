import { useLocation } from "react-router-dom";
import { Fragment, useEffect, useState } from "react";
import ProductDetail from "../../component/product-detail/product-detail.component";
import ChapterList from "../../component/chapter-list/chapter-list.component";

const ProductDetailPage = () => {
  const location = useLocation();
  const productItem = location.state;
  const [currentProduct, setCurrentProduct] = useState({});
  const editProduct = () => {};

  useEffect(() => {
    setCurrentProduct(productItem);
  }, []);
  //TODO: get all chapters via chapter services and display in this pages
  //return ;

  return (
    <Fragment>
      <div className="product detail">
        <h1>Product : {currentProduct.productName}</h1>
        <p>total Sub:{currentProduct.totalSub}</p>
        <p>next Due Date:{currentProduct.nextDueDate}</p>
        <p>status:{currentProduct.status}</p>
        <button onClick={editProduct}>Edit product</button>
      </div>
    </Fragment>
  );
};

export default ProductDetailPage;
