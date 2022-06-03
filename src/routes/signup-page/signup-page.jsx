import SignUpForm from "../../component/signup-form/signup.component";
import { SignUpPageContainer } from "./signup-page.style";
const SignUpPage = () => {
  return (
    <SignUpPageContainer className="sign-up-page-container">
      <SignUpForm />
    </SignUpPageContainer>
  );
};
export default SignUpPage;
