import React from "react";
import {
  Logo,
  BurgerIcon,
  ListIcon,
  ProfileIcon,
} from "@ya.praktikum/react-developer-burger-ui-components";

import styleNavItem from "./NavItem.module.css";

const NavItem = (props) => {
  return (
    <>
      <li className={styleNavItem.item}>
        <a className={styleNavItem.item__link} href={props.link}>
          {props.children}
        </a>
      </li>
    </>
  );
};

export default NavItem;
