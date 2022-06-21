import { useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
const ProductDetailPage = () => {
  const location = useLocation();
  const productItem = location.state;
  const [currentProduct, setCurrentProduct] = useState({});
  useEffect(() => {
    setCurrentProduct(productItem);
  }, []);
  //TODO get all chapters via chapter services and display in this pages
  return <div>{currentProduct.productName}</div>;
};

export default ProductDetailPage;
