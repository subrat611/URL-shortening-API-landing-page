import { useState } from "react";
import "./navbar.scss";

export default function NavBar() {
  const [isVisible, setIsVisible] = useState(false);

  function showNavMenu() {
    setIsVisible((prev) => !prev);
  }

  return (
    <div className="navbar-wrapper">
      <ul className="nav-links">
        <li className="nav-link">
          <span className="nav-logo">Shortly</span>
        </li>
        <li className="nav-link">Features</li>
        <li className="nav-link">Pricing</li>
        <li className="nav-link">Resources</li>
      </ul>
      <div className="nav-btn">
        <span className="nav-btn-login">Login</span>
        <span className="nav-btn-signup">Sign Up</span>
      </div>
      <div className="nav-mob-wrapper">
        <div className="hamburger" onClick={() => showNavMenu()}>
          <div className="line"></div>
          <div className="line"></div>
          <div className="line"></div>
        </div>
        <ul className={isVisible ? "nav-mob-menu visible" : "nav-mob-menu"}>
          <li className="nav-mob-link">Features</li>
          <li className="nav-mob-link">Pricing</li>
          <li className="nav-mob-link">Resources</li>
          <div className="nav-mob-separator"></div>
          <li className="nav-mob-btn-login">Login</li>
          <li className="nav-mob-btn-signup">Sign Up</li>
        </ul>
      </div>
    </div>
  );
}
