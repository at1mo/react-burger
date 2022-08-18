import React, { FC } from "react";

import styleSpinners from "./spinners.module.css";

const Spinners: FC = () => {
  return (
    <div className={styleSpinners.container}>
      <div className={styleSpinners.loader}></div>
    </div>
  );
};

export default Spinners;
