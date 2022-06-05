import React, { useState, useRef } from "react";
import { Link, useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { register } from "../../services/actions/auth";

import {
  Input,
  Button,
} from "@ya.praktikum/react-developer-burger-ui-components";
import Spinners from "../../components/spinners/spinners";

import styleRegister from "./register.module.css";

export const RegisterPage = () => {
  const dispatch = useDispatch();
  const { registerRequest } = useSelector((store) => store.auth);
  const history = useHistory();

  const [form, setForm] = useState({ email: "", password: "", name: "" });
  const passwordRef = React.useRef(null);

  const onIconClick = () => {
    passwordRef.current.focus();
    passwordRef.current.type =
      passwordRef.current.type === "password" ? "text" : "password";
  };

  const redirect = () => {
    history.push("/");
  };

  const registerSubmit = (e) => {
    e.preventDefault();
    dispatch(register(form, redirect))
  }

  if (registerRequest) return <Spinners />;

  return (
    <form className={`${styleRegister.container}` } onSubmit={registerSubmit}>
      <h2 className={`m-0`}>Регистрация</h2>
      <div className={`${styleRegister.input} pt-6`}>
        <Input
          type={"text"}
          placeholder={"Имя"}
          onChange={(e) => setForm({ ...form, name: e.target.value})}
          value={form.name}
          name={"name"}
          error={false}
          errorText={"Ошибка"}
        />
      </div>
      <div className={`${styleRegister.input} pt-6`}>
        <Input
          type={"email"}
          placeholder={"E-mail"}
          onChange={(e) => setForm({ ...form, email: e.target.value})}
          value={form.email}
          name={"email"}
          error={false}
          errorText={"Ошибка"}
        />
      </div>
      <div className={`${styleRegister.input} pt-6`}>
        <Input
          type={"password"}
          placeholder={"Пароль"}
          onChange={(e) => setForm({ ...form, password: e.target.value})}
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
