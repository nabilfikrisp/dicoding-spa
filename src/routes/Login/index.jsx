import React from "react";
import styles from "./login.module.css";
import LoginForm from "../../components/forms/LoginForm";
import { useThemeContext } from "../../contexts/ThemeContext";

const Login = () => {
  const { theme } = useThemeContext();
  return (
    <div className={[styles.container, styles[theme]].join(" ")}>
      <div className={[styles.wrapper, styles[theme]].join(" ")}>
        <LoginForm />
      </div>
    </div>
  );
};

export default Login;
