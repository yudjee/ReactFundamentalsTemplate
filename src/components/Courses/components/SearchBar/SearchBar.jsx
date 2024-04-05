import React, { useState } from "react";

import { Button, Input } from "../../../../common";

import styles from "./styles.module.css";

export const SearchBar = ({ getSearchValue }) => {
  const [value, setValue] = useState("");

  return (
    <div className={styles.searchBar}>
      <Input
        // labelClassName={styles.label}
        // inputClassName={styles.input}
        onChange={({ target }) => setValue(target.value)}
        value={value}
        placeholderText="Enter course name..."
      />
      <Button
        handleClick={() => getSearchValue(value)}
        buttonText="Search"
        className={styles.searchButton}
      />
    </div>
  );
};
