import React from "react";

import {
  Input,
  Button,
} from "@ya.praktikum/react-developer-burger-ui-components";

import styleRegister from "./register.module.css";

const Register = () => {
  return (
    <div className={`${styleRegister.container}`}>
      <h2 className={`m-0`}>Регистрация</h2>
      <div className="pt-6">
        <Input
          type={"text"}
          placeholder={"Имя"}
          onChange={(e) => e.target.value}
          value={""}
          name={"name"}
        />
      </div>
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
          Зарегистрироваться
        </Button>
      </div>
      <p className={`m-0 pb-4`}>
        Уже зарегистрированы?{" "}
        <a className={styleRegister.link} href="#">
          Войти
        </a>
      </p>
    </div>
  );
};

export default Register;
