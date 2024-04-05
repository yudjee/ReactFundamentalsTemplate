import React from "react";
import { Link } from "react-router-dom";

import styles from "../Button/styles.module.css";

export const MyLink = ({ className, ...props }) => {
  return <Link className={`${styles.button} ${className}`} {...props} />;
};
