import ChapterVersionService from "../../utils/ChapterVersionService";
import AuthService from "../../utils/AuthService";
import "bootstrap/dist/css/bootstrap.min.css";
import { UserContext } from "../../context/user-context";
import { useState, useEffect, useContext } from "react";
import ChapterVersionItem from "../../component/chapter-version-item/chapter-version-item.component";

const ChapterVersionPage = () => {
  const defaultChapterVersionData = [
    {
      content: "aaa",
      status: "aaa",
      comment: "aaa",
      wordCount: 3,
    },
    {
      content: "bbb",
      status: "bbb",
      comment: "bbb",
      wordCount: 3,
    },
  ];
  // chapter data passed by chapter detail page
  //const { chapterId, chapterName } = chapterData;
  const [chapterVersionData, setChapterVersionData] = useState(
    defaultChapterVersionData
  );
  const [isEditor, setIsEditor] = useState(false);
  const { currentUser, setCurrentUser } = useContext(UserContext);

  useEffect(() => {
    setCurrentUser(AuthService.getCurrentUser());
  }, []);
  useEffect(() => {
    if (currentUser) {
      // if a current user is loged in, get the role of user
      const role = currentUser.roles[0];
      if (role === "ROLE_EDITOR") {
        setIsEditor(true);
      }
    }
  }, [currentUser]);

  //   useEffect(() => {
  //     ChapterVersionService.getChapterVersion(22).then((response) => {
  //       setChapterVersionData(response);
  //     });
  //   }, []);

  return (
    <div>
      <table className="table table-hover">
        <thead>
          <tr>
            <th>
              <h2>aaa</h2>
            </th>
          </tr>
          <tr>
            <th>Content</th>
            <th>Comment</th>
            <th>Word Count</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {chapterVersionData.map((item, index) => {
            return <ChapterVersionItem key={index} chapterVersionData={item} />;
          })}
        </tbody>
      </table>
    </div>
  );
};
export default ChapterVersionPage;
