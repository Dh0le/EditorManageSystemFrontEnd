import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from "react-router-dom";

const UserList = ({ userData }) => {
  const { username, email, roles } = userData;
  console.log(userData);

  const handleClick = (value) => {};

  return (
    <tr onClick={handleClick(username)}>
      <td> {username} </td>
      <td> {email} </td>
      <td>{roles[0].name}</td>
      <td>
        <Link to={`/user/${username}`} state={userData}>
          User Detail
        </Link>
      </td>
    </tr>
  );
};
export default UserList;
