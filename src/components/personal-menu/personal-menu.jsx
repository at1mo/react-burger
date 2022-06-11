import React from "react";
import { useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";
import PersonalMenuItem from "../personal-menu-item/personal-menu-item";
import { logout } from "../../services/actions/auth";

import stylePersonalMenu from "./personal-menu.module.css";

const PersonalMenu = () => {
  const dispatch = useDispatch();
  const history = useHistory();

  const redirect = () => {
    history.push("/login");
  };

  const logoutSubmit = () => {
    dispatch(logout(redirect));
  };

  return (
    <ul className={`${stylePersonalMenu.container}`}>
      <PersonalMenuItem to="">Профиль</PersonalMenuItem>
      <PersonalMenuItem to="/orders">История заказов</PersonalMenuItem>
      <PersonalMenuItem notLink={true} handleClick={logoutSubmit}>
        Выход
      </PersonalMenuItem>
      <p
        className={`${stylePersonalMenu.description} text text_type_main-default pt-20`}
      >
        В этом разделе вы можете изменить свои персональные данные
      </p>
    </ul>
  );
};

export default PersonalMenu;
