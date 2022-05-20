import React, { useState, useRef } from "react";
import { Link } from "react-router-dom";

import {
  Input,
  Button,
} from "@ya.praktikum/react-developer-burger-ui-components";

import styleLogin from "./login.module.css";

export const LoginPage = () => {
  const [email, setEmail] = useState("");
  const emailRef = useRef(null);

  const [password, setPassword] = useState("");
  const passwordRef = React.useRef(null);
  const onIconClick = () => {
    passwordRef.current.focus();
    passwordRef.current.type =
      passwordRef.current.type === "password" ? "text" : "password";
  };

  return (
    <form className={`${styleLogin.container}`}>
      <h2 className={`m-0`}>Вход</h2>
      <div className={`${styleLogin.input} pt-6`}>
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
      <div className={`${styleLogin.input} pt-6`}>
        <Input
          type={"password"}
          placeholder={"Пароль"}
          onChange={(e) => setPassword(e.target.value)}
          icon={"ShowIcon"}
          value={password}
          name={"password"}
          error={false}
          ref={passwordRef}
          onIconClick={onIconClick}
          errorText={"Ошибка"}
        />
      </div>
      <div className="pt-6 pb-20">
        <Button type="primary" size="medium" disabled={""} htmlType={"submit"}>
          Войти
        </Button>
      </div>
      <p className={`${styleLogin.text} m-0 pb-4`}>
        Вы — новый пользователь?{" "}
        <Link className={styleLogin.link} to="/registr">
          Зарегистрироваться
        </Link>
      </p>
      <p className={`${styleLogin.text} m-0`}>
        Забыли пароль?{" "}
        <Link className={styleLogin.link} to="/forgot-password">
          Восстановить пароль
        </Link>
      </p>
    </form>
  );
};
