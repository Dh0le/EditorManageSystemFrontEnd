import axios from "axios";
import authHeader from "./auth-header";
// Test Service
// Use these function as test authorization for 3 different user groups
const API_URL = "http://66.42.113.23:8080/api/test/";
// require no authorization
const getPublicContent = () => {
  return axios.get(API_URL + "all");
};
// require author authorization
const getAuthorBoard = () => {
  return axios.get(API_URL + "author", { headers: authHeader() });
};
// require editor authorization
const getEditorBoard = () => {
  return axios.get(API_URL + "editor", { headers: authHeader() });
};
// require admin authorization
const getAdminBoard = () => {
  return axios.get(API_URL + "admin", { headers: authHeader() });
};

const UserService = {
  getPublicContent,
  getAuthorBoard,
  getEditorBoard,
  getAdminBoard,
};
export default UserService;
