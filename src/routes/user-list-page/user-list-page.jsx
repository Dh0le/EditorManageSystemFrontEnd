import UserList from "../../component/user-list/user-list.componet";

import "bootstrap/dist/css/bootstrap.min.css";

const UserListPage = () => {
  const defaultUserData = [
    {
      username: "aaa",
      email: "aaa",
      role: "aaa",
    },
    {
      username: "bbb",
      email: "bbb",
      role: "bbb",
    },
    {
      username: "ccc",
      email: "ccc",
      role: "ccc",
    },
  ];
  const handleClick = () => {};
  return (
    <div>
      <table className="table table-hover">
        <thead>
          <tr>
            <th>Username</th>
            <th>Email</th>
            <th>Role</th>
          </tr>
        </thead>
        <tbody>
          {defaultUserData.map((item, index) => {
            return <UserList key={index} userData={item}></UserList>;
          })}
        </tbody>
      </table>
      <button className="btn btn-primary" onClick={handleClick}>
        {" "}
        Create Editor Account{" "}
      </button>
    </div>
  );
};
export default UserListPage;
