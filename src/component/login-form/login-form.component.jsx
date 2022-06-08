import { useState, useContext } from "react";
import AuthService from "../../utils/AuthService";
import { LogInFormContainer, LogInButtonContainer } from "./login-form.styles";
import { Form, Button } from "react-bootstrap";
import { UserContext } from "../../context/user-context";

const LogInForm = () => {
  const defaultFormFields = {
    username: "",
    password: "",
  };

  const [formFields, setFormField] = useState(defaultFormFields);
  const { username, password } = formFields;
  const { setCurrentUser } = useContext(UserContext);

  const handleSubmit = (event) => {
    event.preventDefault();
    try {
      AuthService.signIn(username, password).then((userData) => {
        setCurrentUser(userData);
      });
    } catch (error) {
      alert(error.code);
    }
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormField({ ...formFields, [name]: value });
  };

  return (
    <LogInFormContainer className="sign-in-form-container">
      <h2> Sign in with user name </h2>
      {/* Error! */}
      <Form onSubmit={handleSubmit}>
        <Form.Group className="form-group">
          <Form.Label>User name</Form.Label>
          <Form.Control
            type="text"
            required
            placeholder="user name: Bob123"
            onChange={handleChange}
            name="username"
            value={username}
          />
        </Form.Group>
        <Form.Group className="form-group">
          <Form.Label>password</Form.Label>
          <Form.Control
            type="text"
            required
            placeholder="password: 123456"
            onChange={handleChange}
            name="password"
            value={password}
          />
        </Form.Group>
        <LogInButtonContainer className="button container">
          <Button type="submit">Sign In</Button>
        </LogInButtonContainer>
      </Form>
    </LogInFormContainer>
  );
};

export default LogInForm;
