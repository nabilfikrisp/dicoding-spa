import React from "react";
import { Outlet } from "react-router-dom";
import styles from "./root-layout.module.css";
import Navbar from "../../components/Navbar";

const RootLayout = () => {
  return (
    <div className={styles.rootLayout}>
      <Navbar />
      <div className={styles.rootOutlet}>
        <Outlet />
      </div>
    </div>
  );
};

export default RootLayout;
