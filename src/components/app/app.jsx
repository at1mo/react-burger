import React, { useEffect } from "react";

import { useDispatch, useSelector } from "react-redux";
import { getIngredients } from "../../services/actions/ingredients";

import AppHeader from "../app-header/app-header";
import BurgerIngredients from "../burger-ingredients/burger-ingredients";
import BurgerConstructor from "../burger-constructor/burger-constructor";
import AppFooter from "../app-footer/app-footer";

import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";

import styleApp from "./app.module.css";
import Login from "../login/login";

const App = () => {
  const dispatch = useDispatch();
  const { ingredients, ingredientsRequest, ingredientsFailed } = useSelector(
    (store) => store.ingredients
  );

  useEffect(() => {
    dispatch(getIngredients());
  }, [dispatch]);

  if (ingredientsRequest) return <>Загрузка...</>;
  if (ingredientsFailed) return <>Произошла ошибка</>;

  return (
    ingredients.length && (
      <>
        <AppHeader />
        <main className={`${styleApp.main} ${styleApp.container}`}>
          <Login />
          {/* <DndProvider backend={HTML5Backend}>
            <BurgerIngredients />
            <BurgerConstructor />
          </DndProvider> */}
        </main>
        {/* <AppFooter author="А.Тимохин" /> */}
      </>
    )
  );
};

export default App;

/**
 * TODO:
 * 1. Add Component Loader
 * 2. Add Component Error page 404
 * 3. Fix size container (vh)
 * 4. Fix smoothness opening popup
 */
