import {
  Home,
  LayoutDashboard,
  Layers,
  UserRoundPlus,
  LogIn,
} from "lucide-react";

import "./Navbar.css";

function Navbar() {
  return (
    <nav className="lax-navbar">
      <a className="lax-brand" href="#home" aria-label="LAX home">
        <span className="lax-logo">∞</span>

        <span className="lax-brand-text">
          <strong>LAX</strong>
          <small>Your AI Companion</small>
        </span>
      </a>

      <div className="lax-nav-links">
        <a className="lax-nav-link active" href="#home">
          <Home size={16} />
          <span>Home</span>
        </a>

        <a className="lax-nav-link" href="#dashboard">
          <LayoutDashboard size={16} />
          <span>Dashboard</span>
        </a>

        <a className="lax-nav-link" href="#features">
          <Layers size={16} />
          <span>Features</span>
        </a>

        <a className="lax-nav-link" href="#registration">
          <UserRoundPlus size={16} />
          <span>Registration</span>
        </a>

        <a className="lax-login-link" href="#login">
          <LogIn size={16} />
          <span>Login</span>
        </a>
      </div>
    </nav>
  );
}

export default Navbar;