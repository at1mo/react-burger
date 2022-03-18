import React from "react";
import PropsTypes from "prop-types";

import styleModalOverlay from "./ModalOverlay.module.css";

const ModalOverlay = (props) => {
  return (
    <div className={`${styleModalOverlay.overlay} ${props.modalActive ? styleModalOverlay.active : ''}`} onClick={props.onClick}>
      {props.children}
    </div>
  );
};

ModalOverlay.propsTypes = {
  modalActive: PropsTypes.bool,
  onClick: PropsTypes.func.isRequired,
  children: PropsTypes.children,
};

export default ModalOverlay;
