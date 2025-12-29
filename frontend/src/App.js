import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/home";
import Library from "./pages/library";
import Help from "./pages/help";
import Editor from "./pages/editor";
import Navbar from "./components/Navbar";

function App() {
  return (
    <BrowserRouter>
      <Navbar /> 

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/library" element={<Library />} />
        <Route path="/help" element={<Help />} />
        <Route path="/editor/:templateId" element={<Editor />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;