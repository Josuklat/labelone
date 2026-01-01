import { Link } from "react-router-dom";
import en from "../../i18n/en";

export default function Navbar() {
  return (
    <nav>
      <Link to="/">{en.homeTitle}</Link> |{" "}
      <Link to="/library">{en.libraryTitle}</Link> |{" "}
      <Link to="/help">{en.helpTitle}</Link>
    </nav>
  );
}