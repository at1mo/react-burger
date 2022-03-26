import React from "react";
import Nav from "../nav/nav";

import styleAppHeader from "./app-header.module.css";

const AppHeader = () => {
  return (
    <header className={`${styleAppHeader.header}`}>
      <Nav />
    </header>
  );
};

export default AppHeader;
