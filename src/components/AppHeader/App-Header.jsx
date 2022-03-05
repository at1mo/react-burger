import React from "react";
import {
  Logo,
  BurgerIcon,
  ListIcon,
  ProfileIcon,
} from "@ya.praktikum/react-developer-burger-ui-components";

import styleHeader from "./App-Header.module.css";

function AppHeader() {
  return (
    <>
      <header className={styleHeader.header}>
        <nav className={styleHeader.nav}>
          <ul className={styleHeader.header}>
            <li className="nav__item">
              <a className="nav__link">
                <BurgerIcon />
                <span>Конструктор</span>
              </a>
            </li>
            <li className="nav__items">
              <a className="nav__link">
                <ListIcon />
                <span>Лента заказов</span>
              </a>
            </li>
            <li className="nav__items">
              <a className="nav__link">
                <Logo />
              </a>
            </li>
            <li className="nav__items">
              <a className="nav__link">
                <ProfileIcon />
                <span>Личный кабинет</span>
              </a>
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
}

export default AppHeader;
