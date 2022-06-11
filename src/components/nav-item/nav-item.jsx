import React, { useEffect, useState } from "react";
import { NavLink, useLocation } from "react-router-dom";

import PropTypes from "prop-types";

import styleNavItem from "./nav-item.module.css";

const NavItem = ({ children, name, to }) => {
  const [activeLink, setActiveLink] = useState(false);
  const { pathname } = useLocation();

  const status = (activeLink) => {
    if (activeLink && !name) {
      return styleNavItem.logo;
    } else if (activeLink === to) {
      return styleNavItem.active;
    } else {
      return "";
    }
  };

  useEffect(() => {
    setActiveLink(pathname);
  }, [pathname]);

  return (
    <li
      className={`${styleNavItem.nav__item}
      pt-4 pb-4 pl-5 pr-5`}
    >
      <NavLink
        className={`${styleNavItem.nav__link} ${status(activeLink)}`}
        to={to}
      >
        {children}
        <p className={`${styleNavItem.nav__text} pl-2`}>{name}</p>
      </NavLink>
    </li>
  );
};

NavItem.propTypes = {
  name: PropTypes.string,
  children: PropTypes.element.isRequired,
  to: PropTypes.string.isRequired,
};

export default NavItem;
