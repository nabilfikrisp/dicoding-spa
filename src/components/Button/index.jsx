import React from "react";
import PropTypes from "prop-types";
import "./button.css";

const Button = ({ children, onClick, variant = "action", type = "button" }) => {
  return (
    <button
      className={`my-btn my-btn_${variant}`}
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
};

export default Button;
