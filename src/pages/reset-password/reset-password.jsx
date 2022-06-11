import React, { useState, useRef } from "react";
import { Link, useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { resetPassword } from "../../services/actions/auth";
import Spinners from "../../components/spinners/spinners";

import {
  Input,
  Button,
} from "@ya.praktikum/react-developer-burger-ui-components";

import styleResetPassword from "./reset-password.module.css";

export const ResetPasswordPage = () => {
  const dispatch = useDispatch();
  const { resetPasswordRequest } = useSelector((store) => store.auth);
  const history = useHistory();

  const [form, setForm] = useState({ password: "", code: "" });
  const passwordRef = useRef(null);

  const onIconClick = () => {
    passwordRef.current.focus();
    passwordRef.current.type =
      passwordRef.current.type === "password" ? "text" : "password";
  };

  if (
    typeof history.location.state == "undefined" ||
    !history.location.state.reset
  )
    history.push("/forgot-password");

  const redirect = () => {
    history.push("/");
  };

  const resetPasswordSubmit = (e) => {
    e.preventDefault();
    dispatch(resetPassword(form, redirect));
  };

  if (resetPasswordRequest) return <Spinners />;
  if (localStorage.refreshToken) redirect();

  return (
    <form
      className={`${styleResetPassword.container}`}
      onSubmit={resetPasswordSubmit}
    >
      <h2 className={`m-0`}>Восстановление пароля</h2>
      <div className={`${styleResetPassword.input} pt-6`}>
        <Input
          type={"password"}
          placeholder={"Введите новый пароль"}
          onChange={(e) => setForm({ ...form, password: e.target.value })}
          icon={"ShowIcon"}
          value={form.password}
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
          onChange={(e) => setForm({ ...form, code: e.target.value })}
          value={form.code}
          name={"name"}
          error={false}
          errorText={"Ошибка"}
        />
      </div>
      <div className="pt-6 pb-20">
        <Button type="primary" size="medium" htmlType="submit">
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
