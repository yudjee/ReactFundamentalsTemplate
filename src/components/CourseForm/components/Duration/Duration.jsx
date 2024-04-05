import React from "react";

import { Input } from "../../../../common";
import { DURATION, DURATION_PLACEHOLDER } from "./constants";
import { getCourseDuration } from "../../../../helpers";

import styles from "./styles.module.css";

export const Duration = ({ addDuration, value }) => {
  return (
    <div>
      <Input
        value={value}
        inputClassName={styles.input}
        labelClassName={styles.label}
        type="number"
        labelText={DURATION}
        placeholderText={DURATION_PLACEHOLDER}
        onChange={({ target }) => addDuration("duration", target.value)}
        data-testid="durationInput"
      />
      <p>Duration: {getCourseDuration(value)}</p>
    </div>
  );
};
