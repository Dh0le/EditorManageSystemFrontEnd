import "./App.css";
import Navigation from "./routes/navigation/navigation.component";
import { Routes, Route } from "react-router-dom";
import SignUpPage from "./routes/signup-page/signup-page";
import LoginPage from "./routes/login-page/login-page";
import UserListPage from "./routes/user-list-page/user-list-page";
import CreateEditorPage from "./routes/create-editor-page/create-editor-page";
function App() {
  return (
    <Routes>
      <Route path="/" element={<Navigation />}>
        <Route path="/signup" element={<SignUpPage />} />
        <Route path="/signin" element={<LoginPage />} />
        <Route path="/manager/user" element={<UserListPage />} />
        <Route
          path="/manager/user/create-editor"
          element={<CreateEditorPage />}
        />
      </Route>
    </Routes>
  );
}

export default App;
