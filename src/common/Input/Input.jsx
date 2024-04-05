import React from "react";

import { DEFAULT_INPUT_TYPE } from "./constants";

import styles from "./styles.module.css";

export const Input = ({
  placeholderText,
  labelText,
  onChange,
  type = DEFAULT_INPUT_TYPE,
  value,
  inputClassName = styles.input,
  labelClassName = styles.label,
  ...props
}) => {
  return (
    <label className={labelClassName}>
      {labelText}
      <input
        className={inputClassName}
        value={value}
        onChange={onChange}
        type={type}
        placeholder={placeholderText}
        {...props}
      />
    </label>
  );
};
