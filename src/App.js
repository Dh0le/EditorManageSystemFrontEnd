import "./App.css";
import Navigation from "./routes/navigation/navigation.component";
import { Routes, Route } from "react-router-dom";
import SignUpPage from "./routes/signup-page/signup-page";
import LoginPage from "./routes/login-page/login-page";
import UserListPage from "./routes/user-list-page/user-list-page";
import ProductPage from "./routes/product-list/product-list-page";
import CreateEditorPage from "./routes/create-editor-page/create-editor-page";
import ProductDetailPage from "./routes/product-detail-page/product-detail-page.component";
import UserDetailPage from "./routes/user-detail-page/user-detail-page.component";
function App() {
  return (
    <Routes>
      <Route path="/" element={<Navigation />}>
        <Route path="/signup" element={<SignUpPage />} />
        <Route path="/signin" element={<LoginPage />} />
        <Route path="/manager/user" element={<UserListPage />} />
        <Route path="/manager/products" element={<ProductPage />} />
        <Route
          path="/manager/user/create-editor"
          element={<CreateEditorPage />}
        />
        <Route path="/product/:productId" element={<ProductDetailPage />} />
        <Route path="/user/:username" element={<UserDetailPage />} />
      </Route>
    </Routes>
  );
}

export default App;
