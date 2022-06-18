import axios from "axios";
const API_URL = "http://66.42.113.23:8080/api/v1/";

// function to get all products for manager
const getAllProduct = () => {
  return axios.get(API_URL + "products");
};

// function for manager to update the product information
const adminUpdateProduct = (
  id,
  productName,
  editorId,
  productStatus,
  totalSub,
  newPaymentMethod
) => {
  return axios
    .put(API_URL + "admin/product", {
      id,
      productName,
      editorId,
      productStatus,
      totalSub,
      newPaymentMethod,
    })
    .catch((error) => {
      console.log(error);
    });
};

//function to get all current editing products for editor
//Todo
const getEditingProduct = (userId) => {
  return axios.get(API_URL + "editor/products");
};

//function for editor to update the product information
const editorUpdateProduct = (id, productName, nextDue, status) => {
  return axios
    .put(API_URL + "editor/product", {
      id,
      productName,
      nextDue,
      status,
    })
    .catch((error) => {
      console.log(error);
    });
};

//function for author to get product
const getWrittingProduct = (userId) => {
  return axios.get(API_URL + "author/products");
};

//function for author to update the product information
const authorUpdateProduct = (id, productName, status) => {
  return axios
    .put(API_URL + "author/product", {
      id,
      productName,
      status,
    })
    .catch((error) => {
      console.log(error);
    });
};

//function for author to create the product information
const createProduct = (productName, authorId) => {
  return axios
    .post(API_URL + "author/product", {
      productName,
      authorId,
    })
    .catch((error) => {
      console.log(error);
    });
};

const ProductService = {
  getAllProduct,
  adminUpdateProduct,
  getEditingProduct,
  editorUpdateProduct,
  getWrittingProduct,
  authorUpdateProduct,
  createProduct,
};

export default ProductService;
