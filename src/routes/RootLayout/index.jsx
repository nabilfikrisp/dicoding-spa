import React from "react";
import { Outlet } from "react-router-dom";
import "./root-layout.css";
import Navbar from "../../components/Navbar";

const RootLayout = () => {
  return (
    <div className="root-layout">
      <Navbar />
      <div className="root-outlet">
        <Outlet />
      </div>
    </div>
  );
};

export default RootLayout;
