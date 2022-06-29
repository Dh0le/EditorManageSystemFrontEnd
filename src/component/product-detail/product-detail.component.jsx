import { useState, useContext, useEffect, Fragment } from "react";
import { ProductDetailContainer } from "./product-detail.style";
import ChapterItem from "../chapter-item/chapter-item.component";
import { UserContext } from "../../context/user-context";
import AuthService from "../../utils/AuthService";
import ChapterInfo from "../../utils/ChapterInfo";
import ProductService from "../../utils/productService";
import React from "react";
// import { EditText, EditTextarea } from "react-edit-text";
//import "react-edit-text/dist/index.css";

const ProductDetail = (currentProduct) => {
  const { currentUser, setCurrentUser } = useContext(UserContext);
  const [chapters, setChapters] = useState([]);
  const [header, setHeader] = useState("user is not logged in ");

  const editProduct = () => {
    const role = currentUser.roles[0];
    if (role === "ROLE_AUTHOR") {
      ProductService.authorUpdateProduct();
    } else if (role == "ROLE_EDITOR") {
      ProductService.editorUpdateProduct();
    } else if (role == "ROLE_ADMIN") {
      ProductService.adminUpdateProduct();
    }
  };

  useEffect(() => {
    setCurrentUser(AuthService.getCurrentUser());
  }, []);

  return (
    <Fragment>
      <ProductDetailContainer>
        <div>{/*TODO:show product infor*/}</div>

        <h1>Product : {currentProduct.productName}</h1>
        <p>total Sub:{currentProduct.totalSub}</p>
        <p>next Due Date:{currentProduct.nextDueDate}</p>
        <p>status:{currentProduct.status}</p>
        <button onClick={editProduct}>Edit product</button>
        <div>{/*TODO:button to edit the info */}</div>
      </ProductDetailContainer>
    </Fragment>
  );
};

export default ProductDetail;
