import "./App.css";
import Navigation from "./routes/navigation/navigation.component";
import { Routes, Route } from "react-router-dom";
import SignUpPage from "./routes/signup-page/signup-page";
import LoginPage from "./routes/login-page/login-page";
function App() {
  return (
    <Routes>
      <Route path="/" element={<Navigation />}>
        <Route path="/signup" element={<SignUpPage />} />
        <Route path="/signin" element={<LoginPage />} />
      </Route>
    </Routes>
  );
}

export default App;
