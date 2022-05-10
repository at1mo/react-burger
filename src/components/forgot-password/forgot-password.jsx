import React from "react";

import {
  Input,
  Button,
} from "@ya.praktikum/react-developer-burger-ui-components";

import styleForgotPassword from "./forgot-password.module.css";

const ForgotPassword = () => {
  return (
    <div className={`${styleForgotPassword.container}`}>
      <h2 className={`m-0`}>Восстановление пароля</h2>
      <div className="pt-6">
        <Input
          type={"email"}
          placeholder={"Укажите e-mail"}
          onChange={(e) => e.target.value}
          value={""}
          name={"forgot-email"}
        />
      </div>
      <div className="pt-6 pb-20">
        <Button type="primary" size="medium" onClick={""} disabled={""}>
          Восстановить
        </Button>
      </div>
      <p className={`m-0 pb-4`}>
        Вспомнили пароль?{" "}
        <a className={styleForgotPassword.link} href="#">
          Войти
        </a>
      </p>
    </div>
  );
};

export default ForgotPassword;
