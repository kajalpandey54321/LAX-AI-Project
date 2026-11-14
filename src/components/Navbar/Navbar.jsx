
import {
  Home,
  LayoutDashboard,
  Layers,
  UserRoundPlus,
  LogIn,
} from "lucide-react";

import { Link, NavLink } from "react-router-dom";

import "./Navbar.css";

function Navbar() {
  return (
    <nav className="lax-navbar">

      <Link className="lax-brand" to="/" aria-label="LAX home">
        <span className="lax-logo">∞</span>

        <span className="lax-brand-text">
          <strong>LAX</strong>
          <small>Your AI Companion</small>
        </span>
      </Link>

      <div className="lax-nav-links">

        <NavLink
          to="/"
          end
          className={({ isActive }) =>
            `lax-nav-link ${isActive ? "active" : ""}`
          }
        >
          <Home size={16} />
          <span>Home</span>
        </NavLink>

        <NavLink
          to="/dashboard"
          className={({ isActive }) =>
            `lax-nav-link ${isActive ? "active" : ""}`
          }
        >
          <LayoutDashboard size={16} />
          <span>Dashboard</span>
        </NavLink>

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
