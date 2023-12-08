import React from "react";
import { getAccessToken } from "../utils/network-data";
import { Navigate, Outlet } from "react-router-dom";

const IsLoggedIn = () => {
  if (getAccessToken() === null) {
    return <Navigate to="/login" />;
  }
  return <Outlet />;
};

export default IsLoggedIn;
