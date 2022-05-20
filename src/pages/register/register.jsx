import React, { useState, useRef } from "react";
import { Link } from "react-router-dom";

import {
  Input,
  Button,
} from "@ya.praktikum/react-developer-burger-ui-components";

import styleRegister from "./register.module.css";

export const RegisterPage = () => {
  const [email, setEmail] = useState("");
  const emailRef = useRef(null);

  const [name, setName] = useState("");
  const nameRef = useRef(null);

  const [password, setPassword] = useState("");
  const passwordRef = React.useRef(null);
  const onIconClick = () => {
    passwordRef.current.focus();
    passwordRef.current.type =
      passwordRef.current.type === "password" ? "text" : "password";
  };

  return (
    <form className={`${styleRegister.container}`}>
      <h2 className={`m-0`}>Регистрация</h2>
      <div className={`${styleRegister.input} pt-6`}>
        <Input
          type={"text"}
          placeholder={"Имя"}
          onChange={(e) => setName(e.target.value)}
          value={name}
          name={"name"}
          error={false}
          ref={nameRef}
          errorText={"Ошибка"}
        />
      </div>
      <div className={`${styleRegister.input} pt-6`}>
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
      <div className={`${styleRegister.input} pt-6`}>
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
          Зарегистрироваться
        </Button>
      </div>
      <p className={`${styleRegister.text} m-0 pb-4`}>
        Уже зарегистрированы?{" "}
        <Link className={styleRegister.link} to="/login">
          Войти
        </Link>
      </p>
    </form>
  );
};
