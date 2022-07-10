import { useState, Fragment } from "react";
import { Button, TextField } from "@mui/material";
import React from "react";
import Box from "@mui/material/Box";
import ProductService from "../../utils/productService";

const AdminEditProduct = ({ currentProduct }) => {
  const defaultFormFields = {
    //   id: currentProduct.id,
    //   productName: currentProduct.productName,
    //   editorId: currentProduct.editorId,
    // productName: currentProduct.productName,
    // editorId: currentProduct.editorId,
    // productStatus: currentProduct.productStatus,
    // totalSub: currentProduct.productStatus,
    // newPaymentMethod: currentProduct.newPaymentMethod,
    productName: "",
    editorId: "",
    productStatus: "",
    totalSub: "",
    newPaymentMethod: "",
  };

  const [FormInput, setFormInput] = useState(defaultFormFields);
  const { productName, editorId, productStatus, totalSub, newPaymentMethod } =
    FormInput;
  const id = currentProduct.id;

  const handleSubmit = (evt) => {
    evt.preventDefault();

    console.log(
      id,
      productName,
      editorId,
      productStatus,
      totalSub,
      newPaymentMethod
    );

    console.log("you already submit");
    try {
      ProductService.adminUpdateProduct(
        id,
        productName,
        editorId,
        productStatus,
        totalSub,
        newPaymentMethod
      );
    } catch (error) {
      console.log(error);
    }

    // fetch("https://pointy-gauge.glitch.me/api/form", {
    //   method: "POST",
    //   body: JSON.stringify(data),
    //   headers: {
    //     "Content-Type": "application/json",
    //   },
    // })
    //   .then((response) => response.json())
    //   .then((response) => console.log("Success:", JSON.stringify(response)))
    //   .catch((error) => console.error("Error:", error));
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
        {/* update the editorId */}
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
            //   type="text"
            label="Product Name"
            value={productName}
            //value={currentProduct.editorId}
            onChange={handleInput}
          />

          <TextField
            id="margin-normal"
            margin="normal"
            name="Editor ID"
            type="number"
            label="Editor ID"
            value={editorId}
            //value={currentProduct.editorId}
            onChange={handleInput}
          />

          <TextField
            id="margin-normal"
            margin="normal"
            name="Product Status"
            type="text"
            label="Product Status"
            value={productStatus}
          />

          <TextField
            id="margin-normal"
            margin="normal"
            name="totalSub"
            type="number"
            label="totalSub"
            value={totalSub}
          />

          <TextField
            id="margin-normal"
            margin="normal"
            name="New Payment Method"
            type="text"
            label="New Payment Method"
            value={newPaymentMethod}
          />
          <Button type="submit" variant="contained" color="primary">
            Submit
          </Button>
        </form>
      </Box>
    </Fragment>
  );
};

export default AdminEditProduct;
