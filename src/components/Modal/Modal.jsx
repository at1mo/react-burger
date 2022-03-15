import React from "react";
import PropsTypes from "prop-types";



import styleModal from "./Modal.module.css";
import ButtonClosePopup from "../ButtonClosePopup/ButtonClosePopup";


const Modal = (props) => {
  return (
    <div className={`${styleModal.container} pt-10 pb-15`}>
      <div className={`${styleModal.header} pl-10 pr-10`}>
        <h2 className="text text_type_main-large">{props.name}</h2>
        <ButtonClosePopup />
      </div>
      <div className={styleModal.container_order}>
        {props.children}
      </div>
    </div>
  );
};

export default Modal;
