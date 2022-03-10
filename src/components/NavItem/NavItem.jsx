import React from "react";
import PropsTypes from "prop-types";

import styleNavItem from "./NavItem.module.css";

// const status = false

const NavItem = (props) => {
  return (
    <li className={styleNavItem.item}>
      <a className={styleNavItem.item__link} href={props.link}>
        {props.children}
      </a>
    </li>
  );
};

NavItem.propsTypes = {
  children: PropsTypes.element.isRequired,
  link: PropsTypes.string,
  status: PropsTypes.bool
}

export default NavItem;
