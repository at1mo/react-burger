import React, { useState, useEffect } from "react";

import { config } from "../../utils/constants";

import AppHeader from "../app-header/app-header";
import BurgerIngredients from "../burger-ingredients/burger-ingredients";
import BurgerConstructor from "../burger-constructor/burger-constructor";
import AppFooter from "../app-footer/app-footer";

import styleApp from "./app.module.css";

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
    loadData();
  }, []);

  const loadData = async () => {
    setState({ ...state, hasError: false, isLoading: true });
    fetch(config.baseUrl)
      .then((res) => res.json())
      .then((data) => setState({ ...state, data, isLoading: false }))
      .catch(() => setState({ ...state, hasError: true, isLoading: false }));
  };

  if (isLoading) return <>Загрузка...</>;
  if (hasError) return <>Произошла ошибка</>;

  return (
    <>
      {data.success && (
        <>
          <AppHeader />
          <main className={`${styleApp.main} ${styleApp.container}`}>
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
