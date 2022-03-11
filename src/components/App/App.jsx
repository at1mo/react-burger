import React from "react";

import AppHeader from "../AppHeader/AppHeader";
import BurgerConstructor from "../BurgerConstructor/BurgerConstructor";
import BurgerIngredients from "../BurgerIngredients/BurgerIngredients";

import styleApp from "./App.module.css";

const App = () => {
  return (
    <>
      <AppHeader />

      <main className={styleApp.main}>
        <BurgerIngredients />
        <BurgerConstructor />
      </main>

{/*       <footer>
        <p className="text_type_main-default" style={{ textAlign: "left" }}>
          &copy; 2022. A. Timokhin
        </p>
      </footer> */}
    </>
  );
};

export default App;
