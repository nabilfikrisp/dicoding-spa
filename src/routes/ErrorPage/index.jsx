import React from "react";
import "./error-page.css";
import Button from "../../components/Button";
import { useNavigate } from "react-router-dom";

const ErrorPage = () => {
  const navigate = useNavigate();
  return (
    <div className="error-page_wrapper">
      <h2 className="error-page_text">404</h2>
      <Button onClick={() => navigate(-1)}>Back</Button>
    </div>
  );
};

export default ErrorPage;
