import "./App.css";
import Navigation from "./routes/navigation/navigation.component";
import { Routes, Route } from "react-router-dom";
import TestButton from "./component/test-component/test-button.component";
import SignUpForm from "./component/signup-form/signup.component";
function App() {
  return (
    <Routes>
      <Route path="/" element={<Navigation />}>
        <Route path="/" element={<SignUpForm />} />
      </Route>
    </Routes>
  );
}

export default App;
