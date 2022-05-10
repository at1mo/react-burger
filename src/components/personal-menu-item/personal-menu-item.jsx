import React from "react";
import PropTypes from "prop-types";

import stylePersonalMenuItem from "./personal-menu-item.module.css";

const PersonalMenuItem = ({ children, active, onClick }) => {
  return (
    <li
      className={`${stylePersonalMenuItem.item}
        ${active && stylePersonalMenuItem.item_active}
        text text_type_main-medium pt-4 pb-4`}
      onClick={onClick}
    >
      {children}
    </li>
  );
};

PersonalMenuItem.propTypes = {
  children: PropTypes.element.isRequired,
  active: PropTypes.bool,
  onClick: PropTypes.func,
};

PersonalMenuItem.defaultProps = { active: false };

export default PersonalMenuItem;
