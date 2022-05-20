import React from "react";

import {
  BurgerIcon,
  ListIcon,
  Logo,
  ProfileIcon,
} from "@ya.praktikum/react-developer-burger-ui-components";

import NavItem from "../nav-item/nav-item";

import styleNav from "./nav.module.css";

const Nav = () => {
  return (
    <nav className={styleNav.container}>
      <ul className={`${styleNav.nav__list} pt-4 pb-4`}>
        <NavItem name={"Конструктор"} to="/">
          <BurgerIcon />
        </NavItem>
        <NavItem name={"Лента заказов"} to="/feed">
          <ListIcon />
        </NavItem>
        <NavItem to="/">
          <Logo />
        </NavItem>
        <NavItem name={"Личный кабинет"} to="/profile">
          <ProfileIcon />
        </NavItem>
      </ul>
    </nav>
  );
};

export default Nav;
