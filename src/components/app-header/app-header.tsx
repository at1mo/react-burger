import React, { FC } from "react";
import Nav from "../nav/nav";

import styleAppHeader from "./app-header.module.css";

const AppHeader: FC = () => {
  return (
    <header className={`${styleAppHeader.header}`}>
      <Nav />
    </header>
  );
};

export default AppHeader;
