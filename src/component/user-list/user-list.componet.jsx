import "bootstrap/dist/css/bootstrap.min.css";

const UserList = ({ userData }) => {
  const { username, email, role } = userData;

  const handleClick = (value) => {};

  return (
    <tr onClick={handleClick(username)}>
      <td> {username} </td>
      <td> {email} </td>
      <td> {role} </td>
    </tr>
  );
};
export default UserList;
