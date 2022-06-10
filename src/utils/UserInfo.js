import axios from "axios";

const API_URL = "http://66.42.113.23:8080/api/v1/";

// function to get all user information for manager
const getUserInfo = () => {
  return axios.get(API_URL + "users");
};

// function to add a new role to a user
const addRoleToUser = (username, rolename) => {
  return axios.post(API_URL + "role/addtouser", {
    username,
    rolename,
  });
};

// function to create a new user(editor or manager)
const createUser = (id, username, email, password, role) => {
  return axios.post(API_URL + "user/save", {
    id,
    username,
    email,
    password,
    role,
  });
};

const UserIndo = {
  getUserInfo,
  addRoleToUser,
  createUser,
};
export default UserIndo;
