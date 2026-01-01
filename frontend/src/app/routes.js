// Centralized app routes
import HomePage from "../pages/home/HomePage";
import LibraryPage from "../pages/library/LibraryPage";
import HelpPage from "../pages/help/HelpPage";
import EditorPage from "../pages/editor/EditorPage";

const routes = [
  { path: "/", element: <HomePage /> },
  { path: "/library", element: <LibraryPage /> },
  { path: "/help", element: <HelpPage /> },
  { path: "/editor/:templateId", element: <EditorPage /> },
];

export default routes;