import React from "react";

import {
  Input,
  Button,
} from "@ya.praktikum/react-developer-burger-ui-components";

import styleResetPassword from "./reset-password.module.css";

const ResetPassword = () => {
  return (
    <div className={`${styleResetPassword.container}`}>
      <h2 className={`m-0`}>Восстановление пароля</h2>
      <div className="pt-6">
        <Input
          placeholder={"Введите новый пароль"}
          onChange={(e) => e.target.value}
          value={""}
          name={"new-password"}
          icon={"ShowIcon"}
        />
      </div>
      <div className="pt-6">
        <Input
          type={"text"}
          placeholder={"Введите код из письма"}
          onChange={(e) => e.target.value}
          value={""}
          name={"check-code"}
        />
      </div>

      <div className="pt-6 pb-20">
        <Button type="primary" size="medium" onClick={""} disabled={""}>
          Сохранить
        </Button>
      </div>
      <p className={`m-0 pb-4`}>
        Вспомнили пароль?{" "}
        <a className={styleResetPassword.link} href="#">
          Войти
        </a>
      </p>
    </div>
  );
};

export default ResetPassword;
