import React from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import ItemDetails from "../../components/item-details/item-details";
import Spinners from "../../components/spinners/spinners";
import { NotFound404 } from "../not-found/not-found";

import styleIngredients from "./ingredients.module.css";

export const IngredientsPage = () => {
  const { id } = useParams();

  const { ingredients, ingredientsRequest, ingredientsFailed } = useSelector(
    (store) => store.ingredients
  );

  const ingredient =
    ingredients.length > 0
      ? ingredients.find((ingredient) => ingredient._id === id)
      : {
          image_large: "",
          name: "",
          calories: "",
          proteins: "",
          fat: "",
          carbohydrates: "",
        };

  if (ingredientsRequest) return <Spinners />;
  if (ingredientsFailed) return <>Произошла ошибка, перезагрузитt сайт</>;
  if (!ingredient) {
    <NotFound404 />;
  }

  return ingredient ? (
    <div className={styleIngredients.wrap}>
      <p className={`${styleIngredients.header} text text_type_main-large`}>
        Детали ингредиента
      </p>
      <img className={styleIngredients.image} src={ingredient.image} />
      <p className="text text_type_main-medium pt-4">{ingredient.name}</p>
      <div className={`${styleIngredients.container} pt-8`}>
        <ItemDetails name={"Калории,ккал"} weight={ingredient.calories} />
        <ItemDetails name={"Белки, г"} weight={ingredient.proteins} />
        <ItemDetails name={"Жиры, г"} weight={ingredient.fat} />
        <ItemDetails name={"Углеводы, г"} weight={ingredient.carbohydrates} />
      </div>
    </div>
  ) : (
    <NotFound404 />
  );
};
