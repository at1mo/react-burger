import React, { useState } from "react";
import PersonalMenuItem from "../personal-menu-item/personal-menu-item";

import stylePersonalMenu from "./personal-menu.module.css";

const PersonalMenu = () => {
  const [current, setCurrent] = useState("profile");
  return (
    <div className={`${stylePersonalMenu.container}`}>
      <PersonalMenuItem
        active={current === "profile"}
        onClick={() => setCurrent("profile")}
      >
        Профиль
      </PersonalMenuItem>
      <PersonalMenuItem
        active={current === "history-orders"}
        onClick={() => setCurrent("history-orders")}
      >
        История заказов
      </PersonalMenuItem>
      <PersonalMenuItem
        active={current === "exit"}
        onClick={() => setCurrent("exit")}
      >
        Выход
      </PersonalMenuItem>
      <p
        className={`${stylePersonalMenu.description} text text_type_main-default pt-20`}
      >
        В этом разделе вы можете изменить свои персональные данные
      </p>
    </div>
  );
};

export default PersonalMenu;
