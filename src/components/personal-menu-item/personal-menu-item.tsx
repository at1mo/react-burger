import React, { FC, useEffect, useState } from "react";
import { Link, useRouteMatch, useLocation } from "react-router-dom";

import stylePersonalMenuItem from "./personal-menu-item.module.css";

interface IPersonalMenuItem {
  children?: React.ReactNode;
  to?: string;
  handleClick?: () => void;
}

const PersonalMenuItem: FC<IPersonalMenuItem> = ({
  children,
  to = "",
  handleClick,
}) => {
  const [activeLink, setActiveLink] = useState(false);

  const { pathname } = useLocation();
  const { url } = useRouteMatch();

  useEffect(() => {
    pathname === `${url}${to}` ? setActiveLink(true) : setActiveLink(false);
  }, [pathname, to, url]);

  return (
    <li
      className={`${stylePersonalMenuItem.padding} text text_type_main-medium pb-4`}
    >
      {(!handleClick && (
        <Link
          to={`${url}${to}`}
          className={`${stylePersonalMenuItem.item}
              ${activeLink && stylePersonalMenuItem.item_active}
              `}
        >
          {children}
        </Link>
      )) || (
        <span className={stylePersonalMenuItem.item} onClick={handleClick}>
          {children}
        </span>
      )}
    </li>
  );
};

export default PersonalMenuItem;
