import React from "react";

import styleNavItem from "./NavItem.module.css";

const NavItem = (props) => {
  return (
    <li className={styleNavItem.item}>
      <a className={styleNavItem.item__link} href={props.link}>
        {props.children}
      </a>
    </li>
  );
};

export default NavItem;
