import React from "react";
import RegisterForm from "../../components/forms/RegisterForm";
import styles from "./register.module.css";
import { useThemeContext } from "../../contexts/ThemeContext";

const Register = () => {
  const { theme } = useThemeContext();
  return (
    <div className={[styles.container, styles[theme]].join(" ")}>
      <div className={[styles.wrapper, styles[theme]].join(" ")}>
        <RegisterForm />
      </div>
    </div>
  );
};

export default Register;
