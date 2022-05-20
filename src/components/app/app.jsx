import React from "react";

import AppHeader from "../app-header/app-header";
import { HomePage, LoginPage } from "../../pages";

import styleApp from "./app.module.css";

const App = () => {
  return (
    <>
      <AppHeader />
      <HomePage />
    </>
  );
};

export default App;
