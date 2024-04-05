import React from "react";

import { Button, Input } from "../../../../common";
import { TITLE, TITLE_PLACEHOLDER } from "./constants";

export const Title = ({ addTitle, value, handleSubmit, isUpdateMode }) => {
  return (
    <div>
      <Input
        value={value}
        labelText={TITLE}
        placeholderText={TITLE_PLACEHOLDER}
        onChange={({ target }) => addTitle("title", target.value)}
        data-testid="titleInput"
      />
      <Button
        buttonText={isUpdateMode ? "update course" : "create course"}
        handleClick={handleSubmit}
        data-testid="createCourseButton"
      />
    </div>
  );
};
