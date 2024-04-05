import React from "react";

import { Button } from "../../common";
import { LOGOUT } from "./constants";
import { Logo } from "./components";

import styles from "./styles.module.css";
import { useNavigate } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import { getUserNameSelector } from "../../store/selectors";
import { logoutThunk } from "../../store/thunks/userThunk";

export const Header = () => {
  const dispatch = useDispatch();
  const name = useSelector(getUserNameSelector);
  const navigate = useNavigate();
  const token = localStorage.getItem("token");

  const handleLogout = () => {
    dispatch(logoutThunk());

    localStorage.removeItem("token");
    navigate("/login");
  };

  return (
    <div className={styles.headerContainer}>
      <Logo />
      <div className={styles.userContainer}>
        {name}
        {token && <Button buttonText={LOGOUT} handleClick={handleLogout} />}
      </div>
    </div>
  );
};
