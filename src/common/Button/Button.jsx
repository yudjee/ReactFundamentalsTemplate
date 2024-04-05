import React from "react";

import styles from "./styles.module.css";

export const Button = ({
  buttonText,
  handleClick,
  className,
  type = "button",
  ...props
}) => {
  return (
    <button
      type={type}
      className={`${styles.button} ${className}`}
      onClick={handleClick}
      {...props}
    >
      {buttonText}
    </button>
  );
};
