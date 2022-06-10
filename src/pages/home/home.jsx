import React from "react";

import { useSelector } from "react-redux";

import BurgerIngredients from "../../components/burger-ingredients/burger-ingredients";
import BurgerConstructor from "../../components/burger-constructor/burger-constructor";
import Spinners from "../../components/spinners/spinners";

import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";

import styleHome from "./home.module.css";

export const HomePage = () => {
  console.log("render home");
  const { ingredients, ingredientsRequest, ingredientsFailed } = useSelector(
    (store) => store.ingredients
  );

  if (ingredientsRequest) return <Spinners />;
  if (ingredientsFailed) return <>Произошла ошибка, перезагрузитt сайт</>;

  return (
    ingredients.length > 0 && (
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
