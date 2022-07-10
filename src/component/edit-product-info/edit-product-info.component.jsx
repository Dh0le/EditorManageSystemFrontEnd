import { useState, useContext, useEffect, Fragment } from "react";
import { UserContext } from "../../context/user-context";
import { Input, Button, TextField } from "@mui/material";
import AuthService from "../../utils/AuthService";
import { useFormControl } from "@mui/material/FormControl";
import React from "react";
import { useReducer } from "react";
import AdminEditProduct from "./admin-edit-product.component";
import EditorEditProduct from "./editor-edit-product.component";
// import { EditText, EditTextarea } from "react-edit-text";
//import "react-edit-text/dist/index.css";

// class ProductDetail extends React.Component {
//   constructor(props) {
//     super(props);
//     console.log(props);
//     this.state = { editorId: this.props.editorId };
//     // TODO
//     this.handleInputChange = this.handleInputChange.bind(this);
//     this.handleSubmit = this.handleSubmit.bind(this);
//   }

//   handleInputChange(event) {
//     const target = event.target;
//     const value = target.value;
//     const name = target.name;
//     this.setState({
//       [name]: value,
//     });
//   }

//   handleSubmit(event) {
//     alert("A name was submitted: " + this.state.value);
//     event.preventDefault();
//   }
// }

const ProductDetail = ({ currentProduct }) => {
  const { currentUser, setCurrentUser } = useContext(UserContext);
  const [header, setHeader] = useState("user is not logged in ");
  const [isAuthor, setIsAuthor] = useState(false);
  const [isEditor, setIsEditor] = useState(false);
  const [isManager, setIsManager] = useState(false);
  const [productName, setProductName] = useState("");

  useEffect(() => {
    setCurrentUser(AuthService.getCurrentUser());
  }, []);

  useEffect(() => {
    if (currentUser) {
      // if a current user is loged in
      // we retrieved its info from context and check the role of the user
      // base on these flags we deterement which Link to render
      const role = currentUser.roles[0];
      if (role === "ROLE_AUTHOR") {
        setIsAuthor(true);
      } else if (role === "ROLE_EDITOR") {
        setIsEditor(true);
      } else if (role === "ROLE_ADMIN") {
        setIsManager(true);
      }
    } else {
      // if the current user is null, which means the website is in a logged out status
      // so we reset all these status to false
      setIsAuthor(false);
      setIsManager(false);
      setIsEditor(false);
    }
  }, [currentUser]);

  return (
    <Fragment>
      {isManager && <h1>Manager update Product</h1>}
      {isManager && (
        <AdminEditProduct currentProduct={currentProduct}></AdminEditProduct>
      )}

      {isEditor && <h1>Editor update Product</h1>}
      {isEditor && (
        <EditorEditProduct currentProduct={currentProduct}></EditorEditProduct>
      )}
    </Fragment>
  );
};

export default ProductDetail;
