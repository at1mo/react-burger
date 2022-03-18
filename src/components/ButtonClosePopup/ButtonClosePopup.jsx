import React from "react";
import PropsTypes from "prop-types";

import { CloseIcon } from "@ya.praktikum/react-developer-burger-ui-components";

import styleButtonClosePopup from "./ButtonClosePopup.module.css";

const ButtonClosePopup = ({ onClick }) => {
  return (
    <div className={styleButtonClosePopup.btn} onClick={onClick}>
      <CloseIcon />
    </div>
  );
};

ButtonClosePopup.propsTypes = {
  onClick: PropsTypes.func.isRequired,
};

export default ButtonClosePopup;
