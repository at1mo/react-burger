import React, { FC } from "react";

import styleModalOverlay from "./modal-overlay.module.css";

interface IModalOverlay {
  onClick: () => void;
  children: React.ReactNode;
}

const ModalOverlay: FC<IModalOverlay> = ({ onClick, children }) => {
  return (
    <div
      className={`${styleModalOverlay.overlay} ${styleModalOverlay.active}`}
      onClick={onClick}
    >
      {children}
    </div>
  );
};

export default ModalOverlay;
