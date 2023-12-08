import React, { useState } from "react";
import styles from "./login-form.module.css";
import { login, putAccessToken } from "../../../utils/network-data";
import { Link, useNavigate } from "react-router-dom";
import Button from "../../Button";
import { useThemeContext } from "../../../contexts/ThemeContext";
import { useLangContext } from "../../../contexts/LangContext";

const LoginForm = () => {
  const { lang } = useLangContext();
  const { theme } = useThemeContext();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const text = {
    en: {
      login: "Login",
      register: "Register",
      password: "Password",
      small: "Don't have account",
    },
    id: {
      login: "Masuk",
      register: "Daftar",
      password: "Kata sandi",
      small: "Belum punya akun",
    },
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      setLoading(true);
      const { data, error } = await login({ email, password });
      if (error) {
        return;
      }
      putAccessToken(data.accessToken);
      setEmail("");
      setPassword("");
      navigate("/");
      return;
    } catch (error) {
      return;
    } finally {
      setLoading(false);
    }
  };

  return (
    <form className={styles[`loginForm${theme}`]} onSubmit={handleSubmit}>
      <h1 className={styles[`title${theme}`]}>{text[lang].login}</h1>
      <div className={[styles.inputGroup, styles[theme]].join(" ")}>
        <label htmlFor="email">Email</label>
        <input
          type="email"
          name="email"
          id="email"
          onChange={(e) => setEmail(e.target.value)}
          value={email}
        />
      </div>
      <div className={[styles.inputGroup, styles[theme]].join(" ")}>
        <label htmlFor="password">{text[lang].password}</label>
        <input
          type="password"
          name="password"
          id="password"
          onChange={(e) => setPassword(e.target.value)}
          value={password}
        />
      </div>
      <small className={styles[`noAccount${theme}`]}>
        {text[lang].small}? <Link to="/register">{text[lang].register}!</Link>
      </small>
      <Button variant="warning" isLoading={loading} type="submit">
        {text[lang].login}
      </Button>
    </form>
  );
};

export default LoginForm;
