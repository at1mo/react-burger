import React from "react";
import PropTypes from "prop-types";

import styleNavItem from "./nav-item.module.css";

const NavItem = ({ children, name, active, onClick }) => {
  return (
    <li
      className={`${styleNavItem.nav__item}
      ${active && styleNavItem.active}
      pt-4 pb-4 pl-5 pr-5`}
      onClick={onClick}
    >
      {children}
      <p className={`${styleNavItem.nav__text} pl-2`}>{name}</p>
    </li>
  );
};

NavItem.propTypes = {
  name: PropTypes.string,
  active: PropTypes.bool,
  children: PropTypes.element.isRequired,
  onClick: PropTypes.func,
};

NavItem.defaultProps = { active: false };

export default NavItem;
