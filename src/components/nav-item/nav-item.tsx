import React, { FC, useEffect, useState } from "react";
import { NavLink, useLocation } from "react-router-dom";

import styleNavItem from "./nav-item.module.css";

interface INavItem {
  children: React.ReactNode;
  name?: string;
  to: string;
}

const NavItem: FC<INavItem> = ({ children, name, to }) => {
  const [activeLink, setActiveLink] = useState<string>("");
  const { pathname } = useLocation();

  const status = (activeLink: string) => {
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

export default NavItem;
