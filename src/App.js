import { BrowserRouter, Route, Routes } from "react-router-dom";

import Users from "./pages/Users";
import Repos from "./pages/Repos";
import Commits from "./pages/Commits";
import "./assets/css/styles.css";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Users />} />
        <Route path="/:username" element={<Repos />} />
        <Route path="/:owner/:repo" element={<Commits />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
