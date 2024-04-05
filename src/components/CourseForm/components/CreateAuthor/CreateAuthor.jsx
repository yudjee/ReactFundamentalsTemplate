import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { Button, Input } from "../../../../common";
import { AUTHOR_NAME, CREATE_AUTHOR_BUTTON_TEXT } from "./constants";
import { createAuthorThunk } from "../../../../store/thunks/authorsThunk";
import { getUserTokenSelector } from "../../../../store/selectors";

import styles from "./styles.module.css";

export const CreateAuthor = () => {
  const dispatch = useDispatch();
  const token = useSelector(getUserTokenSelector);
  const [name, setName] = useState("");

  const handleCreateAuthor = () => {
    dispatch(createAuthorThunk({ name }, token));
    setName("");
  };

  return (
    <div className={styles.newAuthorContainer}>
      <Input
        labelText={AUTHOR_NAME}
        value={name}
        onChange={({ target }) => setName(target.value)}
        placeholderText="enter author name"
        data-testid="createAuthorInput"
      />
      <Button
        buttonText={CREATE_AUTHOR_BUTTON_TEXT}
        handleClick={handleCreateAuthor}
      />
    </div>
  );
};
