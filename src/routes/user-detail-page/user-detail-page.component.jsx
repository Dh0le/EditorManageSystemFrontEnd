import { useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
const UserDetailPage = () => {
  const location = useLocation();
  const userData = location.state;
  const [currentUser, setCurrentUser] = useState({});
  useEffect(() => {
    setCurrentUser(userData);
  }, []);
  //TODO get all chapters via chapter services and display in this pages
  return <div>{currentUser.username}</div>;
};

export default UserDetailPage;
