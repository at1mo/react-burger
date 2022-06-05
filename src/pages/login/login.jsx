import React, { useState, useRef } from "react";
import { Link, Redirect } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { login } from "../../services/actions/auth";

import {
  Input,
  Button,
} from "@ya.praktikum/react-developer-burger-ui-components";
import Spinners from "../../components/spinners/spinners";

import styleLogin from "./login.module.css";

export const LoginPage = () => {
  const dispatch = useDispatch();
  const { loginRequest } = useSelector((state) => state.auth);

  const [form, setForm] = useState({ email: "", password: "" });
  const passwordRef = useRef(null);

  const onIconClick = () => {
    passwordRef.current.focus();
    passwordRef.current.type =
      passwordRef.current.type === "password" ? "text" : "password";
  };

  const loginSubmit = (e) => {
    e.preventDefault();
    dispatch(login(form));
  };

  if (loginRequest) return <Spinners />;

  return (
    <>
      {localStorage.refreshToken && !loginRequest ? (
        <Redirect to="/" />
      ) : (
        <form className={`${styleLogin.container}`} onSubmit={loginSubmit}>
          <h2 className={`m-0`}>Вход</h2>
          <div className={`${styleLogin.input} pt-6`}>
            <Input
              type={"email"}
              placeholder={"E-mail"}
              onChange={(e) => setForm({ ...form, email: e.target.value })}
              value={form.email}
              name={"email"}
              error={false}
              errorText={"Ошибка"}
            />
          </div>
          <div className={`${styleLogin.input} pt-6`}>
            <Input
              type={"password"}
              placeholder={"Пароль"}
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
          <div className="pt-6 pb-20">
            <Button type="primary" size="medium" htmlType={"submit"}>
              Войти
            </Button>
          </div>
          <p className={`${styleLogin.text} m-0 pb-4`}>
            Вы — новый пользователь?{" "}
            <Link className={styleLogin.link} to="/register">
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
      )}
    </>
  );
};
