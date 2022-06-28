import { useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import ProductDetail from "../../component/product-detail/product-detail.component";

const ProductDetailPage = () => {
  const location = useLocation();
  const productItem = location.state;
  const [currentProduct, setCurrentProduct] = useState({});
  useEffect(() => {
    setCurrentProduct(productItem);
  }, []);
  //TODO get all chapters via chapter services and display in this pages
  //return <div>{currentProduct.productName}</div>;

  return <ProductDetail />;
};

export default ProductDetailPage;
