import "bootstrap/dist/css/bootstrap.min.css";

const UserList = ({ userData }) => {
  const { username, email, roles } = userData;

  const handleClick = (value) => {};

  return (
    <tr onClick={handleClick(username)}>
      <td> {username} </td>
      <td> {email} </td>
      <td>{roles[0].name}</td>
    </tr>
  );
};
export default UserList;
