import React, { useState, useEffect } from "react";

import { getDataBurgersFromServer } from "../api/api";
import { useSelector } from 'react-redux';
import { DataContext } from "../../services/appContext";
import { OrderContext } from "../../services/orderContext";

import AppHeader from "../app-header/app-header";
import BurgerIngredients from "../burger-ingredients/burger-ingredients";
import BurgerConstructor from "../burger-constructor/burger-constructor";
import AppFooter from "../app-footer/app-footer";

import styleApp from "./app.module.css";

const App = () => {
  const step = useSelector(state => state); // get data in store
  console.log(step);

  const [numberOrder, setNumberOrder] = useState({
    number: "",
    hasError: false,
  });

  const [state, setState] = useState({
    isLoading: false,
    hasError: false,
    data: null,
  });

  const { data, isLoading, hasError } = state;

  useEffect(() => {
    setState({ ...state, hasError: false, isLoading: true });

    getDataBurgersFromServer()
      .then((data) => setState({ ...state, data, isLoading: false }))
      .catch(() => setState({ ...state, hasError: true, isLoading: false }));
  }, []);

  if (isLoading) return <>Загрузка...</>;
  if (hasError) return <>Произошла ошибка</>;

  return (
    <>
      {data && (
        <DataContext.Provider value={data.data}>
          <AppHeader />
          <OrderContext.Provider value={{ numberOrder, setNumberOrder }}>
            <main className={`${styleApp.main} ${styleApp.container}`}>
              <BurgerIngredients />
              <BurgerConstructor />
            </main>
          </OrderContext.Provider>
          <AppFooter author="А.Тимохин" />
        </DataContext.Provider>
      )}
    </>
  );
};

export default App;

/**
 * TODO:
 * 1. Add Component Loader
 * 2. Add Component Error page 404
 * 3. Fix size container (vh)
 * 4. Fix smoothness opening popup
 * 5. Create new context for modal
 * 6. Fix modal (review)
 */
