import React from "react";
import PropsTypes from "prop-types";

import styleModalOverlay from "./ModalOverlay.module.css";

const ModalOverlay = (props) => {
  return (
    <div className={`${styleModalOverlay.overlay}`} >
      {props.children}
    </div>
  );
};

export default ModalOverlay;
