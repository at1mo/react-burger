import React, { FC, SyntheticEvent, useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "../../utils/hooks";
import { getDataUser, updateDataUser } from "../../services/actions/auth";

import {
  Input,
  Button,
} from "@ya.praktikum/react-developer-burger-ui-components";

import styleProfile from "./profile.module.css";

const Profile: FC = () => {
  const dispatch = useDispatch();
  const { name, email } = useSelector((store) => store.auth);
  const [form, setForm] = useState({ name: name, email: email, password: "" });
  const passwordRef = useRef<HTMLInputElement>(null);

  const onIconClick = () => {
    passwordRef.current?.focus();
    passwordRef.current!.type =
      passwordRef.current?.type === "password" ? "text" : "password";
  };

  const resetSubmit = (e: SyntheticEvent) => {
    e.preventDefault();
    setForm({ name: name, email: email, password: "" });
  };

  const saveSubmit = (e: SyntheticEvent) => {
    e.preventDefault();
    dispatch(updateDataUser(form));
  };

  useEffect(() => {
    dispatch(getDataUser());
  }, [dispatch]);

  useEffect(() => {
    setForm({ name: name, email: email, password: "" });
  }, [name, email]);

  return (
    <form className={`${styleProfile.container}`}>
      <div className={`${styleProfile.input}`}>
        <Input
          type={"text"}
          placeholder={"Имя"}
          onChange={(e) => setForm({ ...form, name: e.target.value })}
          value={form.name}
          name={"name"}
          icon={"EditIcon"}
        />
      </div>
      <div className={`${styleProfile.input} pt-6`}>
        <Input
          type={"email"}
          placeholder={"Логин"}
          onChange={(e) => setForm({ ...form, email: e.target.value })}
          value={form.email}
          name={"email"}
          icon={"EditIcon"}
        />
      </div>
      <div className={`${styleProfile.input} pt-6`}>
        <Input
          type={"password"}
          placeholder={"Пароль"}
          onChange={(e) => setForm({ ...form, password: e.target.value })}
          value={form.password}
          name={"password"}
          icon={"ShowIcon"}
          ref={passwordRef}
          onIconClick={onIconClick}
        />
      </div>
      <div className={`${styleProfile.group__buttons} pt-6`}>
        <Button
          type="secondary"
          size="medium"
          htmlType="reset"
          onClick={resetSubmit}
        >
          Отмена
        </Button>
        <Button
          type="primary"
          size="medium"
          htmlType="submit"
          onClick={saveSubmit}
        >
          Сохранить
        </Button>
      </div>
    </form>
  );
};

export default Profile;
