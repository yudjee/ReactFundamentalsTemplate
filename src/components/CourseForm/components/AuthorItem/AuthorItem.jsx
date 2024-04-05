import React from "react";

import { Button } from "../../../../common";
import { BUTTON_TEXT } from "./constants";

import styles from "./styles.module.css";

export const AuthorItem = ({ name, id, type, handleClick }) => {
  return (
    <div className={styles.authorItem}>
      <span>{name}</span>
      <Button
        handleClick={() => handleClick({ id, name })}
        buttonText={BUTTON_TEXT[type]}
        data-testid="addAuthor"
      />
    </div>
  );
};
