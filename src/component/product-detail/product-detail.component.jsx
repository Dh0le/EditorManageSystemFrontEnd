import { useState, useContext, useEffect, Fragment } from "react";
import { UserContext } from "../../context/user-context";
import AuthService from "../../utils/AuthService";
import { Link } from "react-router-dom";
import * as React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
// import { EditText, EditTextarea } from "react-edit-text";
//import "react-edit-text/dist/index.css";

const ProductDetail = ({ currentProduct }) => {
  // const { currentUser, setCurrentUser } = useContext(UserContext);
  const [localProduct, setLocalProduct] = useState(currentProduct);

  // useEffect(() => {
  //   setLocalProduct(currentProduct);
  //   console.log(currentProduct.id);
  // }, [currentProduct]);

  // useEffect(() => {
  //   setCurrentUser(AuthService.getCurrentUser());
  // }, []);

  console.log(currentProduct);

  return (
    <Fragment>
      <div>{/*TODO:show product infor*/}</div>
      <h1>Product : {currentProduct.productName}</h1>
      <p>total Sub:{currentProduct.totalSub}</p>
      <p>next Due Date:{currentProduct.nextDueDate}</p>
      <p>status:{currentProduct.status}</p>
      <p>paymentMethod:{currentProduct.paymentMethod}</p>

      {/* <a
        class="btn btn-primary"
        link={"/editProduct/" + currentProduct.id}
        role="button"
      >
        Edit product information
      </a> */}

      <Link to={`/editProduct/${currentProduct.id}`} state={currentProduct}>
        <button>EditProduct</button>
      </Link>
    </Fragment>
  );
};

export default ProductDetail;
