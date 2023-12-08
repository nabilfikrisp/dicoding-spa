import React from "react";
import { getAccessToken } from "../utils/network-data";
import { Navigate, Outlet } from "react-router-dom";

const IsNotLoggedIn = () => {
  if (getAccessToken()) {
    return <Navigate to="/" />;
  }
  return <Outlet />;
};

export default IsNotLoggedIn;
