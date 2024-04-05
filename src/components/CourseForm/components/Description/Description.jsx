import React from "react";
import {
  DESCRIPTION,
  DESCRIPTION_MIN_LENGTH,
  DESCRIPTION_PLACEHOLDER,
} from "./constants";

export const Description = ({ addDescription, value }) => {
  return (
    <label>
      {DESCRIPTION}
      <textarea
        placeholder={DESCRIPTION_PLACEHOLDER}
        minLength={DESCRIPTION_MIN_LENGTH}
        value={value}
        onChange={({ target }) => addDescription("description", target.value)}
        data-testid="descriptionTextArea"
      />
    </label>
  );
};
