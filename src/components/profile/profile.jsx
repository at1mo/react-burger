import React from "react";

import { Input } from "@ya.praktikum/react-developer-burger-ui-components";

import styleProfile from "./profile.module.css";

const Profile = () => {
  return (
    <div className={`${styleProfile.container}`}>
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
    </div>
  );
};

export default Profile;
