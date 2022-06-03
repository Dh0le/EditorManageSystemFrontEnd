import { useState, useContext } from "react";
import AuthService from "../../utils/AuthService";
import { LogInFormContainer } from "./login-form.styles";
import { Form, Button } from "react-bootstrap";
import { UserContext } from "../../context/user-context";
const LogInForm = () => {
  const defaultFormFields = {
    username: "",
    password: "",
  };

  const [formFields, setFormField] = useState(defaultFormFields);
  const { username, password } = formFields;
  const { currentUser, setCurrentUser } = useContext(UserContext);

  const handleSubmit = (event) => {
    event.preventDefault();
    try {
      AuthService.signIn(username, password);
      setCurrentUser(AuthService.getCurrentUser());
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
      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3">
          <Form.Label>Username</Form.Label>
          <Form.Control
            required
            type="text"
            placeholder="username"
            name="username"
            value={username}
            onChange={handleChange}
          />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Password</Form.Label>
          <Form.Control
            required
            type="text"
            name="password"
            placeholder="password"
            value={password}
            onChange={handleChange}
          />
        </Form.Group>
        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </LogInFormContainer>
  );
};

export default LogInForm;
