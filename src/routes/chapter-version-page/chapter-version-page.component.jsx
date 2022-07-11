import ChapterVersionService from "../../utils/ChapterVersionService";
import AuthService from "../../utils/AuthService";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link, useLocation } from "react-router-dom";
import { UserContext } from "../../context/user-context";
import { useState, useEffect, useContext } from "react";
import ChapterVersionItem from "../../component/chapter-version-item/chapter-version-item.component";
import {
  ButtonContainer,
  StatusContainer,
} from "./chapter-version-page.styles";

const ChapterVersionPage = () => {
  const location = useLocation();
  const chapterData = location.state;
  const { id, chapterName } = chapterData;
  const [chapterVersionData, setChapterVersionData] = useState([]);
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
      }
    }
  }, [currentUser]);

  useEffect(() => {
    ChapterVersionService.getChapterVersion(id).then((response) => {
      setChapterVersionData(response);
      console.log(chapterVersionData);
    });
  }, []);

  return (
    <div>
      <table className="table table-hover">
        <thead>
          <tr>
            <th>
              <h2>{chapterName}</h2>
            </th>
          </tr>
          <tr>
            <th>Content</th>
            <th>Comment</th>
            <th>Word Count</th>
            <th>Status</th>
            {userRole !== 0 && <th> Details </th>}
          </tr>
        </thead>
        <tbody>
          {chapterVersionData.length != 0 &&
            chapterVersionData.map((item, index) => {
              return (
                <ChapterVersionItem key={index} chapterVersionData={item} />
              );
            })}
          {chapterVersionData.length === 0 && (
            <tr>
              <td>Chapter version not found!</td>
            </tr>
          )}
        </tbody>
      </table>
      {chapterVersionData.length === 0 && userRole === 2 && (
        <ButtonContainer>
          <StatusContainer>
            <span>Chapter Status: </span>
            <span>created</span>
          </StatusContainer>
          <Link>
            <button className="btn-primary"> Create Chapter</button>
          </Link>
        </ButtonContainer>
      )}
    </div>
  );
};
export default ChapterVersionPage;
