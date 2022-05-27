import React, { useState, useRef } from "react";
import { Link, useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import { forgotPassword } from "../../services/actions/auth";
import Spinners from "../../components/spinners/spinners";

import {
  Input,
  Button,
} from "@ya.praktikum/react-developer-burger-ui-components";

import styleForgotPassword from "./forgot-password.module.css";

export const ForgotPasswordPage = () => {
  const dispatch = useDispatch();
  const history = useHistory();

  const [email, setEmail] = useState("");
  const emailRef = useRef(null);

  const forgotSubmit = (e) => {
    e.preventDefault();
    dispatch(forgotPassword(email));
    history.push("/reset-password");
  };

  return (
    <form
      className={`${styleForgotPassword.container}`}
      onSubmit={forgotSubmit}
    >
      <h2 className={`m-0`}>Восстановление пароля</h2>
      <div className={`${styleForgotPassword.input} pt-6`}>
        <Input
          type={"email"}
          placeholder={"E-mail"}
          onChange={(e) => setEmail(e.target.value)}
          value={email}
          name={"email"}
          error={false}
          ref={emailRef}
          errorText={"Ошибка"}
        />
      </div>
      <div className="pt-6 pb-20">
        <Button type="primary" size="medium">
          Восстановить
        </Button>
      </div>
      <p className={`${styleForgotPassword.text} m-0 pb-4`}>
        Вспомнили пароль?{" "}
        <Link className={styleForgotPassword.link} to="/login">
          Войти
        </Link>
      </p>
    </form>
  );
};
