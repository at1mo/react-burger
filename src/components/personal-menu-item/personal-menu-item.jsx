import React, { useEffect, useState } from "react";
import { Link, useRouteMatch, useLocation, matchPath } from "react-router-dom";

import PropTypes from "prop-types";

import stylePersonalMenuItem from "./personal-menu-item.module.css";

const PersonalMenuItem = ({
  children,
  to = "",
  handleClick,
}) => {
  const [activeLink, setActiveLink] = useState(false);

  const { pathname } = useLocation();
  const { url } = useRouteMatch();

  useEffect(() => {
    pathname === `${url}${to}` ? setActiveLink(true) : setActiveLink(false);
  }, [pathname]);

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

PersonalMenuItem.propTypes = {
  children: PropTypes.string.isRequired,
  to: PropTypes.string.isRequired,
  handleClick: PropTypes.func,
};

PersonalMenuItem.defaultProps = { to: ""};

export default PersonalMenuItem;
