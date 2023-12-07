import React from "react";
import styles from "./error-page.module.css";
import Button from "../../components/Button";
import { useNavigate } from "react-router-dom";

const ErrorPage = () => {
  const navigate = useNavigate();
  return (
    <div className={styles.wrapper}>
      <h2 className={styles.text}>404</h2>
      <Button onClick={() => navigate(-1)}>Back</Button>
    </div>
  );
};

export default ErrorPage;
