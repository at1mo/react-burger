import React, { useEffect } from "react";

import { useDispatch, useSelector } from "react-redux";
import { getIngredients } from "../../services/actions/ingredients";

import BurgerIngredients from "../../components/burger-ingredients/burger-ingredients";
import BurgerConstructor from "../../components/burger-constructor/burger-constructor";
import Spinners from "../../components/spinners/spinners";

import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";

import styleHome from "./home.module.css";

export const HomePage = () => {
  const dispatch = useDispatch();
  const { ingredients, ingredientsRequest, ingredientsFailed } = useSelector(
    (store) => store.ingredients
  );

  useEffect(() => {
    dispatch(getIngredients());
  }, [dispatch]);

  if (ingredientsRequest) return <Spinners />;
  if (ingredientsFailed) return <>Произошла ошибка</>;

  return (
    ingredients.length && (
      <>
        <main className={`${styleHome.main} ${styleHome.container}`}>
          <DndProvider backend={HTML5Backend}>
            <BurgerIngredients />
            <BurgerConstructor />
          </DndProvider>
        </main>
      </>
    )
  );
};
