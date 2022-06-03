import { useState } from "react";
import AuthService from "../../utils/AuthService";
import { LogInFormContainer } from "./login-form.styles";
import { Form, Button } from "react-bootstrap";
import { render } from "@testing-library/react";

const LogInForm = () => {
  const defaultFormFields = {
    username: "",
    password: "",
  };

  const [formFields, setFormField] = useState(defaultFormFields);
  const { username, password } = formFields;

  const handleSubmit = (event) => {
    event.preventDefault();
    try {
      AuthService.signIn(username, password);
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
      <form onSubmit={handleSubmit}>
        <formInput>
          lable = "username" type = "username" required onChange ={" "}
          {handleChange}
          name = "username" value = {username}
        </formInput>
        <formInput>
          label = "password" type = "password" required conChange ={" "}
          {handleChange}
          name = "password" value = {password}
        </formInput>
      </form>
    </LogInFormContainer>
  );
};

export default LogInForm;
