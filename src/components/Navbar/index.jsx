import React from "react";
import { NavLink } from "react-router-dom";
import styles from "./navbar.module.css";

const Navbar = () => {
  return (
    <nav className={styles.navbar}>
      <ul className={styles.navList}>
        <li className={styles.navItem}>
          <NavLink
            to="/"
            className={({ isActive }) =>
              [styles.navLink, isActive ? styles.navLinkActive : ""].join(" ")
            }
          >
            Active Note
          </NavLink>
        </li>
        <li className={styles.navItem}>
          <NavLink
            to="/archives"
            className={({ isActive }) =>
              [styles.navLink, isActive ? styles.navLinkActive : ""].join(" ")
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
