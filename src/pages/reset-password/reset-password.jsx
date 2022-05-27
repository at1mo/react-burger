import React, { useState, useRef } from "react";
import { Link } from "react-router-dom";

import {
  Input,
  Button,
} from "@ya.praktikum/react-developer-burger-ui-components";

import styleResetPassword from "./reset-password.module.css";

export const ResetPasswordPage = () => {
  const [code, setCode] = useState("");
  const codeRef = useRef(null);

  const [password, setPassword] = useState("");
  const passwordRef = useRef(null);

  const onIconClick = () => {
    passwordRef.current.focus();
    passwordRef.current.type =
      passwordRef.current.type === "password" ? "text" : "password";
  };

  return (
    <form className={`${styleResetPassword.container}`}>
      <h2 className={`m-0`}>Восстановление пароля</h2>
      <div className={`${styleResetPassword.input} pt-6`}>
        <Input
          type={"password"}
          placeholder={"Введите новый пароль"}
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
      <div className={`${styleResetPassword.input} pt-6`}>
        <Input
          type={"text"}
          placeholder={"Введите код из письма"}
          onChange={(e) => setCode(e.target.value)}
          value={code}
          name={"name"}
          error={false}
          ref={codeRef}
          errorText={"Ошибка"}
        />
      </div>
      <div className="pt-6 pb-20">
        <Button type="primary" size="medium" disabled={""}>
          Сохранить
        </Button>
      </div>
      <p className={`${styleResetPassword.text} m-0 pb-4`}>
        Вспомнили пароль?{" "}
        <Link className={styleResetPassword.link} to="/login">
          Войти
        </Link>
      </p>
    </form>
  );
};
