import axios from "axios";
const API_URL = "http://66.42.113.23:8080/api/v1/auth/";

// function to sign up a new user
const register = (username, email, password) => {
  return axios
    .post(API_URL + "signup", {
      username,
      email,
      password,
    })
    .catch((error) => {
      //TODO
      console.log(error);
    });
};

// function to sign in
const signIn = (username, password) => {
  return axios
    .post(API_URL + "signin", {
      username,
      password,
    })
    .then((response) => {
      if (response.data.jwt) {
        localStorage.setItem("user", JSON.stringify(response.data));
      }
      return response.data;
    })
    .catch((error) => {
      //TODO
      console.log(error);
    });
};
// function to sign out
const signOut = () => {
  localStorage.removeItem("user");
};

// this will return data of current user from local storage
const getCurrentUser = () => {
  return JSON.parse(localStorage.getItem("user"));
};

const AuthService = {
  register,
  signIn,
  signOut,
  getCurrentUser,
};
export default AuthService;
