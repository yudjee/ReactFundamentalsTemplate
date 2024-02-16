import React from "react";

import { Button } from "../../common";
import { Logo } from "./components";

import styles from "./styles.module.css";
const LOGOUT = "Logout";

export const Header = () => {
  return (
    <div className={styles.headerContainer}>
      <Logo />
      <div className={styles.userContainer}>
        <p className={styles.userName}>Name</p>
        <Button buttonText={LOGOUT} />
      </div>
    </div>
  );
};
