// src/app/App.js

import { BrowserRouter, Routes, Route } from "react-router-dom";
import routes from "./routes";

// Global layout component
import Navbar from "../components/layout/Navbar";

// Main application component
function App() {
  return (
    <BrowserRouter>
      {/* Global navigation */}
      <Navbar />

      {/* Application routes */}
      <Routes>
        {routes.map((route, index) => (
          <Route
            key={index}
            path={route.path}
            element={route.element}
          />
        ))}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
