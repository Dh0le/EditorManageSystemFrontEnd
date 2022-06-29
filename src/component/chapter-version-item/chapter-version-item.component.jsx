import "bootstrap/dist/css/bootstrap.min.css";
import { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import { UserContext } from "../../context/user-context";
import AuthService from "../../utils/AuthService";

const ChapterVersionItem = ({ chapterVersionData }) => {
  const { id, content, status, comment, wordCount } = chapterVersionData;
  const [userRole, setUserRole] = useState(0);
  const { currentUser, setCurrentUser } = useContext(UserContext);

  useEffect(() => {
    setCurrentUser(AuthService.getCurrentUser());
  }, []);
  useEffect(() => {
    if (currentUser) {
      // if a current user is loged in, get the role of user
      const role = currentUser.roles[0];
      if (role === "ROLE_EDITOR") {
        setUserRole(1);
      } else if (role === "ROLE_AUTHOR") {
        setUserRole(2);
      } else {
        console.log("user not logged in");
      }
    }
  }, [currentUser]);
  return (
    <tr>
      <td>{content}</td>
      <td>{comment}</td>
      <td>{status}</td>
      <td>{wordCount}</td>
      {userRole != 0 && (
        <td>
          {userRole == 1 && status != "accepted" && status != "rejected" && (
            <Link to={`/versions/${id}`} state={chapterVersionData}>
              Version Detail
            </Link>
          )}
          {userRole == 2 && status != "accepted" && (
            <Link to={`/versions/${id}`} state={chapterVersionData}>
              Version Detail
            </Link>
          )}
        </td>
      )}
    </tr>
  );
};
export default ChapterVersionItem;
