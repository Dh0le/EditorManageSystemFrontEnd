// this function will set authentication header of JWT
export default function authHeader() {
  const user = JSON.parse(localStorage.getItem("user"));
  // check if we have a jwt on our local storage
  if (user && user.jwt) {
    //jwt found, add custom prefix and return it to header
    return { Authorization: "JWT=" + user.jwt };
  } else {
    // no jwt found
    return {};
  }
}
