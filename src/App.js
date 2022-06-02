import "./App.css";
import Navigation from "./routes/navigation/navigation.component";
import { Routes, Route } from "react-router-dom";
import TestButton from "./component/test-component/test-button.component";
function App() {
  return (
    <Routes>
      <Route path="/" element={<Navigation />}>
        <Route path="/" element={<TestButton />} />
      </Route>
    </Routes>
  );
}

export default App;
