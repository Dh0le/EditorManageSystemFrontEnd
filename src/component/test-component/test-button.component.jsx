import { useState, useEffect } from "react";
import AuthService from "../../utils/AuthService";
import UserService from "../../utils/UserService";
import "bootstrap/dist/css/bootstrap.min.css";
import { useContext } from "react";
import { UserContext } from "../../context/user-context";
const TestButton = () => {
  const [username, setUsername] = useState();
  const [password, setPassword] = useState();
  const { setCurrentUser } = useContext(UserContext);

  useEffect(() => {
    setUsername("Manager1");
    setPassword("1234");
  }, []);

  const signIn = () => {
    AuthService.signIn(username, password).then((response) => {
      console.log(response);
      setCurrentUser(AuthService.getCurrentUser());
    });
  };
  const signOut = () => {
    AuthService.signOut();
  };

  const getAdminBoard = () => {
    UserService.getAdminBoard().then((response) => {
      console.log(response);
    });
  };

  const getEditorBoard = () => {
    UserService.getEditorBoard().then((response) => {
      console.log(response);
    });
  };

  const getPublicContent = () => {
    UserService.getPublicContent().then((response) => {
      console.log(response);
    });
  };

  const getAllProduct = () => {
    UserService.getAllProduct().then((response) => {
      console.log(response);
    });
  };

  return (
    <div>
      <button className="btn btn-success" onClick={signIn}>
        Test signIn button
      </button>
      <button className="btn btn-primary" onClick={signOut}>
        Test signOut button
      </button>
      <button className="btn btn-info" onClick={getAdminBoard}>
        Test get admin board
      </button>
      <button className="btn btn-info" onClick={getPublicContent}>
        Test get public content
      </button>
      <button className="btn btn-info" onClick={getEditorBoard}>
        Test get editor content
      </button>
    </div>
  );
};

export default TestButton;
