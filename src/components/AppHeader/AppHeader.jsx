import React from "react";
import {
  Logo,
  BurgerIcon,
  ListIcon,
  ProfileIcon,
} from "@ya.praktikum/react-developer-burger-ui-components";

import NavItem from "../NavItem/NavItem";

import styleHeader from "./AppHeader.module.css";

function AppHeader() {
  return (
    <>
      <header className={styleHeader.header}>
        <nav className={styleHeader.nav}>
          <ul className={styleHeader.nav__list}>
            <NavItem link={"#1"}>
              <BurgerIcon />
              <span className="text_type_main-default pl-2">Конструктор</span>
            </NavItem>
            <NavItem link={"#2"}>
              <ListIcon />
              <span className="text_type_main-default pl-2">Лента заказов</span>
            </NavItem>
            <NavItem link={"#3"}>
              <Logo />
            </NavItem>
            <NavItem link={"#4"}>
              <ProfileIcon />
              <span className="text_type_main-default pl-2">Личный кабинет</span>
            </NavItem>
          </ul>
        </nav>
      </header>
    </>
  );
}

export default AppHeader;
