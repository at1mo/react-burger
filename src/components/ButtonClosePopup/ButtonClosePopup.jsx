import React from "react";
import { CloseIcon } from "@ya.praktikum/react-developer-burger-ui-components";

import styleButtonClosePopup from "./ButtonClosePopup.module.css";

const ButtonClosePopup = () => {
  return (
    <div className={styleButtonClosePopup.btn}>
      <CloseIcon />
    </div>
  );
};

export default ButtonClosePopup;
