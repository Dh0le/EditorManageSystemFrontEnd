import "./App.css";
import Navigation from "./routes/navigation/navigation.component";
import { Routes, Route } from "react-router-dom";
import TestButton from "./component/test-component/test-button.component";
import SignUpPage from "./routes/signup-page/signup-page";
function App() {
  return (
    <Routes>
      <Route path="/" element={<Navigation />}>
        <Route path="/" element={<TestButton />} />
        <Route path="/auth/signup" element={<SignUpPage />} />
      </Route>
    </Routes>
  );
}

export default App;
