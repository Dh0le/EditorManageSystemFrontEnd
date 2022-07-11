import { useState, useContext, useEffect, Fragment } from "react";
import { UserContext } from "../../context/user-context";
import ProductService from "../../utils/productService";
import { ProductFormContainer } from "./product-form.styles";
import ProductItem from "../product-item/product-item.component";
import AuthService from "../../utils/AuthService";
import "bootstrap/dist/css/bootstrap.min.css";

const ProductForm = () => {
  const { currentUser, setCurrentUser } = useContext(UserContext);
  const [products, setProducts] = useState([]);
  const [header, setHeader] = useState("user is not logged in ");

  useEffect(() => {
    setCurrentUser(AuthService.getCurrentUser());
  }, []);
  useEffect(() => {
    if (currentUser) {
      // if a current user is loged in, get the role of user
      const role = currentUser.roles[0];
      //console.log(role);
      if (role === "ROLE_AUTHOR") {
        //get all writing product for author
        ProductService.getWrittingProduct(currentUser.id).then((response) => {
          //console.log(response);
          setProducts(response);
        });
        //set the page header for the author
        setHeader("All writing products");
      } else if (role === "ROLE_EDITOR") {
        //get all editing product for editor
        ProductService.getEditingProduct(currentUser.id).then((response) => {
          setProducts(response);
        });
        //set header for editor
        setHeader("All editing products");
      } else if (role === "ROLE_ADMIN") {
        //get all product for manager
        ProductService.getAllProduct(currentUser.id).then((response) => {
          //console.log("Current user is admin");
          //console.log(response);
          setProducts(response);
        });

        //set header for manager
        setHeader("All products");
      }
    } else {
      // if the current user is null, which means the website is in a logged out status
      // so we reset all these status to false
      console.log("current user is not logged in ");
    }
  }, [currentUser]);

  useEffect(() => {
    //console.log(products);
  }, [products]);

  return (
    <Fragment>
      <ProductFormContainer>
        <table className="table table-hover">
          <thead>
            <tr>
              <th>productName</th>
              <th>nextDueDate</th>
              <th>status</th>
              <th>Detail</th>
            </tr>
          </thead>
          <tbody>
            {products != null &&
              products.map((product) => (
                <ProductItem productItem={product} key={product.productName} />
              ))}
          </tbody>
        </table>
      </ProductFormContainer>
    </Fragment>
  );
};

export default ProductForm;
