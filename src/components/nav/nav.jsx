import React, {useState} from "react";

import {
  BurgerIcon,
  ListIcon,
  Logo,
  ProfileIcon,
} from "@ya.praktikum/react-developer-burger-ui-components";

import NavItem from "../nav-item/nav-item";

import styleNav from "./nav.module.css";

const Nav = () => {
  const [current, setCurrent] = useState('Конструктор')
  return (
    <nav className={styleNav.container}>
      <ul className={`${styleNav.nav__list} pt-4 pb-4`}>
        <NavItem name={"Конструктор"} active={current === "Конструктор"} onClick={() => setCurrent('Конструктор')}>
          <BurgerIcon />
        </NavItem>
        <NavItem name={"Лента заказов"} active={current === "Лента заказов"} onClick={() => setCurrent('Лента заказов')}>
          <ListIcon />
        </NavItem>
        <NavItem>
          <Logo />
        </NavItem>
        <NavItem name={"Личный кабинет"} active={current === "Личный кабинет"} onClick={() => setCurrent('Личный кабинет')}>
          <ProfileIcon />
        </NavItem>
      </ul>
    </nav>
  );
};

export default Nav;
