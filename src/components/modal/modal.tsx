import React, { FC, useEffect } from "react";
import ReactDOM from "react-dom";

import ModalOverlay from "../modal-overlay/modal-overlay";
import ButtonClosePopup from "../button-close-popup/button-close-popup";

import styleModal from "./modal.module.css";

const modalRoot: any = document.getElementById("react-modals");

interface IModal {
  name?: string;
  closeModal: () => void;
  children?: React.ReactNode;
}

const Modal: FC<IModal> = ({ name, closeModal, children }) => {
  const handlerEscClose = (evt: KeyboardEventInit) => {
    if (evt.key === "Escape") {
      closeModal();
    }
  };

  useEffect(() => {
    document.addEventListener("keydown", handlerEscClose);

    return () => document.removeEventListener("keydown", handlerEscClose);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return ReactDOM.createPortal(
    <ModalOverlay onClick={closeModal}>
      <div
        className={`${styleModal.container} pt-10 pb-15`}
        onClick={(e) => {
          e.stopPropagation();
        }}
      >
        <div className={`${styleModal.header} pl-10 pr-10`}>
          <h2 className="text text_type_main-large">{name}</h2>
          <ButtonClosePopup onClick={closeModal} />
        </div>
        <div className={styleModal.container_order}>{children}</div>
      </div>
    </ModalOverlay>,
    modalRoot
  );
};

export default Modal;
