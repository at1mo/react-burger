import React, { useRef, useState } from "react";

import {
  Input,
  Button,
} from "@ya.praktikum/react-developer-burger-ui-components";

import styleLogin from "./login.module.css";

const Login = () => {
  const [value, setValue] = useState("");
  const inputRef = useRef(null);
  const onIconClick = () => {
    setTimeout(() => inputRef.current.focus(), 0);
    alert("Icon Click Callback");
  };

  return (
    <div className={`${styleLogin.container}`}>
      <h2 className={`${styleLogin.title} pb-6`}>Вход</h2>
      <Input
        type={"email"}
        placeholder={"E-mail"}
        onChange={(e) => e.target.value}
        value={""}
        name={"email"}
        error={false}
        errorText={"Ошибка"}
        size={"default"}
      />
      <Input
        className={"pt-6"}
        placeholder={"Пароль"}
        onChange={(e) => setValue(e.target.value)}
        value={value}
        ref={inputRef}
        name={"password"}
        error={false}
        icon={"ShowIcon"}
        onIconClick={onIconClick}
        errorText={"Ошибка"}
        size={"default"}
      />
      <Button type="primary" size="medium" onClick={""} disabled={""}>
        Войти
      </Button>
      <p>
        Вы — новый пользователь?<a href="#">Зарегистрироваться</a>
      </p>
      <p>
        Забыли пароль?<a href="#">Восстановить пароль</a>
      </p>
    </div>
  );
};

export default Login;
