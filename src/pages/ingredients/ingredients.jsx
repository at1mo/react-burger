import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getIngredients } from "../../services/actions/ingredients";
import ItemDetails from "../../components/item-details/item-details";

import styleIngredients from "./ingredients.module.css";
import { NotFound404 } from "../not-found/not-found";

export const IngredientsPage = () => {
  const dispatch = useDispatch();
  const { id } = useParams();

  useEffect(() => {
    dispatch(getIngredients());
  }, [dispatch]);

  const { ingredients } = useSelector((store) => store.ingredients);

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
