import { useState, useEffect, Fragment } from "react";
import { useLocation } from "react-router-dom";
import ProductService from "../../utils/productService";
import { ProductFormContainer } from "../../component/product-form/product-form.styles";
import ProductItem from "../../component/product-item/product-item.component";
import "bootstrap/dist/css/bootstrap.min.css";

const UserDetailPage = () => {
  const location = useLocation();
  const userData = location.state;
  const [products, setProducts] = useState([]);
  const [head, setHead] = useState("Products:");
  const { id, username, email, roles } = userData;
  console.log(id);
  useEffect(() => {
    if (userData) {
      // if a current user is loged in, get the role of user
      const role = userData.roles[0].name;
      //console.log(role);
      if (role === "ROLE_AUTHOR") {
        //get all writing product for author
        ProductService.getWrittingProduct(userData.id).then((response) => {
          //console.log(response);
          setProducts(response);
        });
        setHead("Writing Products: ");
      } else if (role === "ROLE_EDITOR") {
        //get all editing product for editor
        ProductService.getEditingProduct(userData.id).then((response) => {
          setProducts(response);
        });
        setHead("Editing Products: ");
      } else if (role === "ROLE_ADMIN") {
        //get all product for manager
        ProductService.getAllProduct(userData.id).then((response) => {
          console.log("Current user is admin");
          console.log(response);
          setProducts(response);
        });
      }
    } else {
      // if the current user is null, which means the website is in a logged out status
      // so we reset all these status to false
      console.log("current user is not logged in ");
    }
  }, [userData]);

  useEffect(() => {
    //console.log(products);
  }, [products]);

  return (
    <Fragment>
      <h2> {username} </h2>
      <p>email: {email} </p>
      <p>role: {roles[0].name}</p>
      <p> </p>
      <h2>{head}</h2>
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

export default UserDetailPage;
