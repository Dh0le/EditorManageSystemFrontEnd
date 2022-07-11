import UserList from "../../component/user-list/user-list.componet";
import UserInfo from "../../utils/UserInfo";
import { Link } from "react-router-dom";

import "bootstrap/dist/css/bootstrap.min.css";
import { useEffect, useState } from "react";

const UserListPage = () => {
  const defaultUserData = [
    {
      username: "",
      email: "",
      roles: [{ ID: null, name: "" }],
    },
  ];
  const [usersData, setUsersData] = useState(defaultUserData);
  useEffect(() => {
    UserInfo.getUserInfo().then((response) => {
      setUsersData(response);
    });
  }, []);
  return (
    <div>
      <table className="table table-hover">
        <thead>
          <tr>
            <th>Username</th>
            <th>Email</th>
            <th>Role</th>
            <th>Detail</th>
          </tr>
        </thead>
        <tbody>
          {usersData.map((item, index) => {
            return <UserList key={index} userData={item}></UserList>;
          })}
        </tbody>
      </table>
      <Link to="/manager/user/create-editor">
        <button className="btn btn-primary"> Create Editor Account </button>
      </Link>
    </div>
  );
};
export default UserListPage;
