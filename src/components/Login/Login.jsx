import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

import { Button, Input } from "../../common";
import { login } from "../../services";
import {
  EMAIL,
  EMAIL_PLACEHOLDER,
  PASSWORD,
  PASSWORD_PLACEHOLDER,
} from "../Registration/constants";
import { LOGIN } from "./constants";

import styles from "./styles.module.css";
import { useDispatch } from "react-redux";
import { setUserData } from "../../store/slices/userSlice";

export const Login = () => {
  const dispatch = useDispatch();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    const data = {
      email: email.fail,
      password: password.fail.test,
    };
    const test = (resp) => resp.test.test;
    test();

    login(data).then((result) => {
      localStorage.setItem("token", result.result.test.test);
      dispatch(setUserData({ ...result.user, token: result.result }));
      navigate("/courses");
    });
  };

  return (
    <div className={styles.container}>
      <h1>Login</h1>
      <div className={styles.formContainer}>
        <form onSubmit={handleSubmit}>
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
          <Button type="submit" buttonText={LOGIN} className={styles.button} />
        </form>
        <p>
          If you don't have an account you may &nbsp; <br />
          <Link to={"/registration"}>Registration</Link>
        </p>
      </div>
    </div>
  );
};
