import React, {useEffect} from "react";
import ReactDOM from "react-dom";
import PropsTypes from "prop-types";

import ModalOverlay from "../modal-overlay/modal-overlay";
import ButtonClosePopup from "../button-close-popup/button-close-popup";

import styleModal from "./modal.module.css";

const modalRoot = document.getElementById("react-modals");

const Modal = (props) => {
	const handlerEscClose = (evt) => {
		if (evt.key === "Escape") {
      props.setModalActive({...props.modalActive, status: false})
    }
	}

  useEffect(() => {
		document.addEventListener('keydown', handlerEscClose);

		return () => document.removeEventListener('keydown', handlerEscClose);
	}, []);

  return ReactDOM.createPortal(
    (
      <ModalOverlay modalActive={props.modalActive} onClick={() => props.setModalActive({...props.modalActive, status: false})}>
      <div className={`${styleModal.container} pt-10 pb-15`} onClick={e => { e.stopPropagation() }}>
        <div className={`${styleModal.header} pl-10 pr-10`}>
          <h2 className="text text_type_main-large">{props.name}</h2>
          <ButtonClosePopup onClick={() => props.setModalActive({...props.modalActive, status: false})} />
        </div>
        <div className={styleModal.container_order}>{props.children}</div>
      </div>
      </ModalOverlay>
    ),
    modalRoot
  );
};

Modal.propsTypes = {
  name: PropsTypes.string,
  modalActive: PropsTypes.bool,
  setModalActive: PropsTypes.func.isRequired,
  children: PropsTypes.children,
};

export default Modal;
