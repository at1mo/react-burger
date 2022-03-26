import React, { useState, useEffect } from "react";

import { config } from "../../utils/constants";

import AppHeader from "../app-header/app-header";
import BurgerIngredients from "../burger-ingredients/burger-ingredients";
import BurgerConstructor from "../burger-constructor/burger-constructor";
import AppFooter from "../app-footer/app-footer";

import styleApp from "./app.module.css";

const App = () => {
  const [state, setState] = useState({
    isLoading: false,
    hasError: false,
    data: null,
  });

  const { data, isLoading, hasError } = state;

  useEffect(() => {
    loadData();
  }, []);

  const loadData = () => {
    setState({ ...state, hasError: false, isLoading: true });
    fetch(config.baseUrl)
      .then((res) => res.json())
      .then((data) => setState({ ...state, data, isLoading: false }))
      .catch(() => setState({ ...state, hasError: true, isLoading: false }));
  };

  if (isLoading) return <>Загрузка...</>; // Сделать потом отдельный компонент
  if (hasError) return <>Произошла ошибка</>; // Сделать потом отдельный компонент

  return (
    <>
      {data && (
        <>
          <AppHeader />
          <main className={`${styleApp.main} ${styleApp.container}`}>
            <BurgerIngredients data={data.data} />
            <BurgerConstructor data={data.data} />
          </main>
          <AppFooter author="А.Тимохин" />
        </>
      )}
    </>
  );
};

export default App;
