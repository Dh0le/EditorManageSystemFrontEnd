import { useState, Fragment } from "react";
import { Button, TextField } from "@mui/material";
import React from "react";
import Box from "@mui/material/Box";
import ProductService from "../../utils/productService";

const AuthorEditProduct = ({ currentProduct }) => {
  const defaultFormFields = {
    productName: "",
    status: "",
  };

  const [FormInput, setFormInput] = useState(defaultFormFields);
  const { productName, status } = FormInput;
  const id = currentProduct.id;

  const handleSubmit = (evt) => {
    evt.preventDefault();

    console.log(id, productName, status);

    console.log("you already submit");
    try {
      ProductService.adminUpdateProduct(id, productName, status);
    } catch (error) {
      console.log(error);
    }
  };

  const handleInput = (evt) => {
    const name = evt.target.name;
    const newValue = evt.target.value;
    setFormInput({ [name]: newValue });
  };

  return (
    <Fragment>
      <Box
        sx={{
          "& .MuiTextField-root": { m: 1, width: "25ch" },
        }}
        noValidate
        autoComplete="off"
      >
        <form onSubmit={handleSubmit}>
          <TextField
            disabled
            name="Product ID"
            type="number"
            label="Product ID"
            defaultValue={currentProduct.id}
            helperText="You can not edit the product Id"
          />
          <TextField
            name="Product Name"
            type="text"
            label="Product Name"
            value={productName}
            //value={currentProduct.editorId}
            onChange={handleInput}
          />

          <TextField
            id="margin-normal"
            margin="normal"
            name="Product Status"
            type="text"
            label="Product Status"
            value={status}
          />

          <Button type="submit" variant="contained" color="primary">
            Submit
          </Button>
        </form>
      </Box>
    </Fragment>
  );
};

export default AuthorEditProduct;
