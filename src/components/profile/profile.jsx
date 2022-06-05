import React from "react";

import {
  Input,
  Button,
} from "@ya.praktikum/react-developer-burger-ui-components";

import styleProfile from "./profile.module.css";

const Profile = () => {
  return (
    <form className={`${styleProfile.container}`}>
      <div className={`${styleProfile.input}`}>
        <Input
          type={"text"}
          placeholder={"Имя"}
          onChange={(e) => e.target.value}
          value={"Name"}
          name={"name-user"}
          icon={"EditIcon"}
        />
      </div>
      <div className={`${styleProfile.input} pt-6`}>
        <Input
          type={"email"}
          placeholder={"Логин"}
          onChange={(e) => e.target.value}
          value={"mail@stellar.burgers"}
          name={"login"}
          icon={"EditIcon"}
        />
      </div>
      <div className={`${styleProfile.input} pt-6`}>
        <Input
          type={"password"}
          placeholder={"Пароль"}
          onChange={(e) => e.target.value}
          value={"asd"}
          name={"password"}
          icon={"EditIcon"}
        />
      </div>
      <div className={`${styleProfile.group__buttons} pt-6`}>
        <Button className="p-2" type="secondary" size="medium" htmlType="reset">
          Отмена
        </Button>
        <Button type="primary" size="medium" htmlType="submit">
          Сохранить
        </Button>
      </div>
    </form>
  );
};

export default Profile;
