import "./navbar.scss";

export default function NavBar() {
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
    </div>
  );
}
