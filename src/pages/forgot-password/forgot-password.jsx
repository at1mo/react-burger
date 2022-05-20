import React, { useState, useRef } from "react";
import { Link } from "react-router-dom";

import {
  Input,
  Button,
} from "@ya.praktikum/react-developer-burger-ui-components";

import styleForgotPassword from "./forgot-password.module.css";

export const ForgotPasswordPage = () => {
  const [email, setEmail] = useState("");
  const emailRef = useRef(null);

  return (
    <form className={`${styleForgotPassword.container}`}>
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
        <Button type="primary" size="medium" disabled={""}>
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
