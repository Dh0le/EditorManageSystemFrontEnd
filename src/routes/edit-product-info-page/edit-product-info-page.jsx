import EditProductForm from "../../component/edit-product-info/edit-product-info.component";
import { useLocation } from "react-router-dom";
import { useEffect, useState } from "react";

const EditProductPage = () => {
  const location = useLocation();
  const productItem = location.state;
  //console.log("product", productItem);

  return <EditProductForm currentProduct={productItem}></EditProductForm>;
};

export default EditProductPage;
