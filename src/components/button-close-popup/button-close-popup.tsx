import React, { FC } from "react";

import { CloseIcon } from "@ya.praktikum/react-developer-burger-ui-components";

import styleButtonClosePopup from "./button-close-popup.module.css";

interface IButtonClosePopup {
  onClick: () => void;
}

const ButtonClosePopup: FC<IButtonClosePopup> = ({ onClick }) => {
  return (
    <div className={styleButtonClosePopup.btn} onClick={onClick}>
      <CloseIcon type="primary" />
    </div>
  );
};

export default ButtonClosePopup;
