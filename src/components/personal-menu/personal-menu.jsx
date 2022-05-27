import React from "react";
import PersonalMenuItem from "../personal-menu-item/personal-menu-item";

import stylePersonalMenu from "./personal-menu.module.css";

const PersonalMenu = () => {
  return (
    <ul className={`${stylePersonalMenu.container}`}>
      <PersonalMenuItem to="#">Профиль</PersonalMenuItem>
      <PersonalMenuItem to="/orders">История заказов</PersonalMenuItem>
      <PersonalMenuItem to="">Выход</PersonalMenuItem>
      <p
        className={`${stylePersonalMenu.description} text text_type_main-default pt-20`}
      >
        В этом разделе вы можете изменить свои персональные данные
      </p>
    </ul>
  );
};

export default PersonalMenu;
