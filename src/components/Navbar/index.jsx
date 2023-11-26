import React from "react";
import { NavLink } from "react-router-dom";
import "./navbar.css";

const Navbar = () => {
  return (
    <nav className="navbar">
      <ul className="nav-list">
        <li className="nav-item">
          <NavLink
            to="/"
            className={({ isActive }) =>
              ["nav-link", isActive ? "nav-link_active" : ""].join(" ")
            }
          >
            Active Note
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink
            to="/archives"
            className={({ isActive }) =>
              ["nav-link", isActive ? "nav-link_active" : ""].join(" ")
            }
          >
            Archived Note
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
