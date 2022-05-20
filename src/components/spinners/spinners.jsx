import React from "react";

import styleSpinners from "./spinners.module.css";

const Spinners = () => {
  return <div className={styleSpinners.container}>
    <div className={styleSpinners.loader}></div>
  </div>;
};

export default Spinners;
