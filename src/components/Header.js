import { Link, useLocation } from "react-router-dom";
import logo from "../assets/logo_text.png";
import "../styles/header.css";

export default function Header() {
  const location = useLocation();

  return (
    <div className="header">
      <Link to="/">
        <img className="header__logo" src={logo} alt="logo" />
      </Link>

      <div className="header__menu">
        <Link className={`header__tap ${location.pathname === "/allwebsites" ? "active" : ""}`} to="allwebsites">
          모든 홈페이지
        </Link>
        <Link className={`header__tap ${location.pathname === "/facilities" ? "active" : ""}`} to="facilities">
          편의시설
        </Link>
      </div>
    </div>
  );
}
