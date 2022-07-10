import { useLocation } from "react-router-dom";
import { Fragment, useEffect, useState } from "react";
import ProductDetail from "../../component/product-detail/product-detail.component";
import ChapterList from "../../component/chapter-list/chapter-list.component";

const ProductDetailPage = () => {
  const location = useLocation();
  const productItem = location.state;

  return (
    <Fragment>
      <ProductDetail currentProduct={productItem}></ProductDetail>
      <ChapterList currentProduct={productItem}></ChapterList>
    </Fragment>
  );
};

export default ProductDetailPage;
