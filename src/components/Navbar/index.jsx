import React, { useEffect } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import styles from "./navbar.module.css";
import { LogOutIcon, MoonIcon, SunDimIcon } from "lucide-react";
import { useUserContext } from "../../contexts/UserContext";
import { useThemeContext } from "../../contexts/ThemeContext";
import { useLangContext } from "../../contexts/LangContext";

const Navbar = () => {
  const navigate = useNavigate();
  const { fetchProfile, user, logout } = useUserContext();
  const { theme, toggleTheme } = useThemeContext();
  const { lang, toggleLang } = useLangContext();

  const text = {
    en: {
      activeNote: "Active Note",
      archivedNote: "Archived Note",
    },
    id: {
      activeNote: "Catatan Aktif",
      archivedNote: "Catatan Terarsip",
    },
  };

  useEffect(() => {
    fetchProfile();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <nav className={[styles.navbar, styles[theme]].join(" ")}>
      <ul className={styles.navList}>
        <li className={styles.navItem}>
          <NavLink
            to="/"
            className={({ isActive }) =>
              [
                styles.navLink,
                styles[theme],
                isActive ? styles[`navLinkActive${theme}`] : "",
              ].join(" ")
            }
          >
            {text[lang].activeNote}
          </NavLink>
        </li>
        <li className={styles.navItem}>
          <NavLink
            to="/archives"
            className={({ isActive }) =>
              [
                styles.navLink,
                styles[theme],
                isActive ? styles[`navLinkActive${theme}`] : "",
              ].join(" ")
            }
          >
            {text[lang].archivedNote}
          </NavLink>
        </li>
      </ul>
      <div className={styles.appActions}>
        <div
          className={[styles.actionsItem, styles.userName, styles[theme]].join(
            " "
          )}
          onClick={() => {
            toggleLang();
          }}
        >
          {lang}
        </div>
        <div
          className={[styles.actionsItem, styles[theme]].join(" ")}
          onClick={() => {
            toggleTheme();
          }}
        >
          {theme === "dark" ? <SunDimIcon /> : <MoonIcon />}
        </div>
        <div
          className={[styles.actionsItem, styles.userName, styles[theme]].join(
            " "
          )}
        >
          Hi, {user && user.name}!
        </div>
        <div
          className={[styles.actionsItem, styles[theme]].join(" ")}
          onClick={() => {
            logout();
            navigate("/login");
          }}
        >
          <LogOutIcon />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
