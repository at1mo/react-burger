import React from "react";

import {
  Input,
  Button,
} from "@ya.praktikum/react-developer-burger-ui-components";

import styleLogin from "./login.module.css";

const Login = () => {
  return (
    <div className={`${styleLogin.container}`}>
      <h2 className={`m-0`}>Вход</h2>
      <div className="pt-6">
        <Input
          type={"email"}
          placeholder={"E-mail"}
          onChange={(e) => e.target.value}
          value={""}
          name={"email"}
        />
      </div>
      <div className="pt-6">
        <Input
          placeholder={"Пароль"}
          onChange={(e) => e.target.value}
          value={""}
          name={"password"}
          icon={"ShowIcon"}
        />
      </div>
      <div className="pt-6 pb-20">
        <Button type="primary" size="medium" onClick={""} disabled={""}>
          Войти
        </Button>
      </div>
      <p className={`m-0 pb-4`}>
        Вы — новый пользователь?{" "}
        <a className={styleLogin.link} href="#">
          Зарегистрироваться
        </a>
      </p>
      <p className={`m-0`}>
        Забыли пароль?{" "}
        <a className={styleLogin.link} href="#">
          Восстановить пароль
        </a>
      </p>
    </div>
  );
};

export default Login;
