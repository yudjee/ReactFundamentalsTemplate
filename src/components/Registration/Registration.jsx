import { Link, useNavigate } from "react-router-dom";

import { Button, Input } from "../../common";
import {
  EMAIL,
  EMAIL_PLACEHOLDER,
  NAME,
  NAME_PLACEHOLDER,
  PASSWORD,
  PASSWORD_PLACEHOLDER,
  REGISTRATION,
} from "./constants";
import { useState } from "react";
import { createUser } from "../../services";

import styles from "./styles.module.css";

export const Registration = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    const data = {
      name,
      email,
      password,
    };

    createUser(data).then(() => navigate("/login"));
  };

  return (
    <div className={styles.container}>
      <h1>Registration</h1>
      <div className={styles.formContainer}>
        <form onSubmit={handleSubmit}>
          <Input
            placeholderText={NAME_PLACEHOLDER}
            labelText={NAME}
            onChange={({ target }) => setName(target.value)}
            value={name}
          />
          <Input
            placeholderText={EMAIL_PLACEHOLDER}
            labelText={EMAIL}
            onChange={({ target }) => setEmail(target.value)}
            value={email}
          />
          <Input
            placeholderText={PASSWORD_PLACEHOLDER}
            labelText={PASSWORD}
            onChange={({ target }) => setPassword(target.value)}
            value={password}
            type="password"
          />
          <Button
            type="submit"
            buttonText={REGISTRATION}
            className={styles.button}
          />
        </form>
        <p>
          If you have an account you may&nbsp;
          <Link to={"/login"}>Login</Link>
        </p>
      </div>
    </div>
  );
};
