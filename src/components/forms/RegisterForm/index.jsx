import React, { useState } from "react";
import styles from "./register-form.module.css";
import { register } from "../../../utils/network-data";
import { Link, useNavigate } from "react-router-dom";
import Button from "../../Button";
import { useThemeContext } from "../../../contexts/ThemeContext";
import { useLangContext } from "../../../contexts/LangContext";
import useInput from "../../../hooks/useInput";

const RegisterForm = () => {
  const { lang } = useLangContext();
  const { theme } = useThemeContext();
  const {
    value: name,
    onInputChange: onNameChange,
    reset: resetName,
  } = useInput();
  const {
    value: email,
    onInputChange: onEmailChange,
    reset: resetEmail,
  } = useInput();
  const {
    value: password,
    onInputChange: onPasswordChange,
    reset: resetPassword,
  } = useInput();
  const {
    value: confirmPassword,
    onInputChange: onConfirmPasswordChange,
    reset: resetConfirmPassword,
  } = useInput();
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const text = {
    en: {
      name: "Name",
      login: "Login",
      register: "Register",
      password: "Password",
      confirmPassword: "Confirm Password",
      small: "Already have account",
    },
    id: {
      name: "Nama",
      login: "Masuk",
      register: "Daftar",
      password: "Kata sandi",
      confirmPassword: "Konfirmasi kata sandi",
      small: "Sudah punya akun",
    },
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (password.length < 6) {
      alert("Password must be atleast 6 characters");
      return;
    }

    if (password !== confirmPassword) {
      alert("Confirm password not match");
      return;
    }

    try {
      setLoading(true);
      const { error } = await register({ email, password, name });
      if (error) {
        return;
      }
      resetName();
      resetEmail();
      resetPassword();
      resetConfirmPassword();
      alert("Register success, you may log in now");
      navigate("/");
      return;
    } catch (error) {
      return;
    } finally {
      setLoading(false);
    }
  };

  return (
    <form className={styles[`registerForm${theme}`]} onSubmit={handleSubmit}>
      <h1 className={styles[`title${theme}`]}>{text[lang].register}</h1>
      <div className={[styles.inputGroup, styles[theme]].join(" ")}>
        <label htmlFor="email">{text[lang].name}</label>
        <input
          type="name"
          name="name"
          id="name"
          onChange={onNameChange}
          value={name}
        />
      </div>
      <div className={[styles.inputGroup, styles[theme]].join(" ")}>
        <label htmlFor="email">Email</label>
        <input
          type="email"
          name="email"
          id="email"
          onChange={onEmailChange}
          value={email}
        />
      </div>
      <div className={[styles.inputGroup, styles[theme]].join(" ")}>
        <label htmlFor="password">{text[lang].password}</label>
        <input
          type="password"
          name="password"
          id="password"
          onChange={onPasswordChange}
          value={password}
        />
      </div>
      <div className={[styles.inputGroup, styles[theme]].join(" ")}>
        <label htmlFor="confirmPassword">{text[lang].confirmPassword}</label>
        <input
          type="password"
          name="confirmPassword"
          id="confirmPassword"
          onChange={onConfirmPasswordChange}
          value={confirmPassword}
        />
      </div>
      <small className={styles[`haveAccount${theme}`]}>
        {text[lang].small}? <Link to="/login">{text[lang].login}!</Link>
      </small>
      <Button variant="warning" isLoading={loading} type="submit">
        {text[lang].register}
      </Button>
    </form>
  );
};

export default RegisterForm;
