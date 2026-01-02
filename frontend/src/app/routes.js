// src/app/routes.js

// Centralized route definitions for the application.
// This file contains ONLY route configuration, no UI logic.

// Page components
import HomePage from "../pages/home/HomePage";
import LibraryPage from "../pages/library/LibraryPage";
import HelpPage from "../pages/help/HelpPage";
import EditorPage from "../pages/editor/EditorPage";

// Array-based route configuration.
// This makes routes easy to read, maintain and extend.
const routes = [
  // Home page
  {
    path: "/",
    element: <HomePage />,
  },

  // Library page (list of templates)
  {
    path: "/library",
    element: <LibraryPage />,
  },

  // Help / documentation page
  {
    path: "/help",
    element: <HelpPage />,
  },

  // Editor page
  // Uses a dynamic parameter (:templateId)
  // Example: /editor/pallet
  {
    path: "/editor/:templateId",
    element: <EditorPage />,
  },
];

export default routes;
