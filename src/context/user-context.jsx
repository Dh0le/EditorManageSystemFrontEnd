import { createContext, useEffect, useState } from "react";
export const UserContext = createContext({
  currentUser: null,
  setCurrentUser: () => null,
});
export const UserProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null);
  const value = { currentUser, setCurrentUser };
  //  use a listener to monitor the auth status
  // this function should activate when this component mount
  useEffect(() => {
    window.addEventListener("storage", () => {
      const user = localStorage.getItem("user");
      console.log(user);
      setCurrentUser(user);
    });
  }, []);

  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
};
