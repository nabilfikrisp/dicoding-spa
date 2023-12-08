import React from "react";
import PropTypes from "prop-types";
import styles from "./button.module.css";
import { useThemeContext } from "../../contexts/ThemeContext";

const Button = ({
  children,
  onClick,
  variant = "action",
  type = "button",
  isLoading = false,
}) => {
  const { theme } = useThemeContext();
  const styleVariant = {
    danger: styles.myBtnDanger,
    action: styles[`myBtnAction${theme}`],
    warning: styles.myBtnWarning,
    success: styles.myBtnSuccess,
  };
  if (isLoading) {
    return (
      <button
        className={`${styles.myBtn} ${styleVariant[variant]} ${styles.isLoading}`}
        onClick={onClick}
        type={type}
        disabled
      >
        Loading...
      </button>
    );
  }
  return (
    <button
      className={`${styles.myBtn} ${styleVariant[variant]}`}
      onClick={onClick}
      type={type}
    >
      {children}
    </button>
  );
};

Button.propTypes = {
  children: PropTypes.node.isRequired,
  variant: PropTypes.oneOf(["danger", "action", "warning", "success"]),
  type: PropTypes.oneOf(["button", "submit"]),
  onClick: PropTypes.func,
  isLoading: PropTypes.bool,
};

export default Button;
