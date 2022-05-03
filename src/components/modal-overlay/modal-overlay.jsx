import React from "react";
import PropsTypes from "prop-types";

import styleModalOverlay from "./modal-overlay.module.css";

const ModalOverlay = (props) => {
  return (
    <div
      className={`${styleModalOverlay.overlay} ${styleModalOverlay.active}`}
      onClick={props.onClick}
    >
      {props.children}
    </div>
  );
};

ModalOverlay.propsTypes = {
  onClick: PropsTypes.func.isRequired,
  children: PropsTypes.oneOfType([
    PropsTypes.arrayOf(PropsTypes.node),
    PropsTypes.node,
  ]).isRequired,
};

export default ModalOverlay;
