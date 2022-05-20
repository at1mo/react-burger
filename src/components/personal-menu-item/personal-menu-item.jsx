import React, { useEffect, useState } from "react";
import { Link, useRouteMatch } from "react-router-dom";

import PropTypes from "prop-types";

import stylePersonalMenuItem from "./personal-menu-item.module.css";

const PersonalMenuItem = ({ children, to }) => {
  const [activeLink, setActiveLink] = useState(false);
  const { url } = useRouteMatch();

  useEffect(() => {
    setActiveLink(activeLink);
    console.log(url);
  }, [url]);

  return (
    <li className="text text_type_main-medium pt-4 pb-4">
      <Link
        to={`${url}${to}`}
        className={`${stylePersonalMenuItem.item}
        ${activeLink && stylePersonalMenuItem.item_active}
        `}
      >
        {children}
      </Link>
    </li>
  );
};

PersonalMenuItem.propTypes = {
  children: PropTypes.string.isRequired,
  to: PropTypes.string.isRequired,
};

export default PersonalMenuItem;
