import React, { useState, useEffect } from "react";

import { config } from "../../utils/constants";

import AppHeader from "../AppHeader/AppHeader";
import BurgerConstructor from "../BurgerConstructor/BurgerConstructor";
import BurgerIngredients from "../BurgerIngredients/BurgerIngredients";
import AppFooter from "../AppFooter/AppFooter";

import styleApp from "./App.module.css";

const App = () => {
  const [modalActive, setModalActive] = useState({ status: false });
  const [modalIngredient, setModalIngredient] = useState({
    item: [],
    status: false,
  });

  const [state, setState] = useState({
    isLoading: false,
    hasError: false,
    data: {},
  });

  const { data, isLoading, hasError } = state;

  useEffect(() => {
    setState({ ...state, hasError: false, isLoading: true });
    loadData();
  }, []);

  const loadData = async () => {
    try {
      fetch(config.baseUrl)
        .then((res) => res.json())
        .then((data) => setState({ ...state, data, isLoading: false }));
    } catch (e) {
      setState({ ...state, hasError: true, isLoading: false });
    }
  };

  return (
    <>
      {isLoading && "Загрузка..."}
      {hasError && "Произошла ошибка"}
      {!isLoading && !hasError && data.success && (
        <>
          <AppHeader />
          <main className={styleApp.main}>
            <BurgerIngredients
              data={data.data}
              modalIngredient={modalIngredient}
              setModalIngredient={setModalIngredient}
            />
            <BurgerConstructor
              data={data.data}
              modalActive={modalActive}
              setModalActive={setModalActive}
            />
          </main>
          <AppFooter author="А.Тимохин" />
        </>
      )}
    </>
  );
};

export default App;
