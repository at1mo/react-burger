import React, { useContext, useState } from "react";
import PropsTypes from "prop-types";

import { DataContext } from "../../services/appContext";
import Tabs from "../tabs/tabs";
import ItemBurger from "../item-burger/item-burger";
import IngredientDetails from "../ingredient-details/ingredient-details";

import styleBurgerIngredients from "./burger-ingredients.module.css";

const BurgerIngredients = () => {
  const dataIngredients = useContext(DataContext)

  const [modalIngredient, setModalIngredient] = useState({
    item: [],
    status: false,
  });

  const bunsList = dataIngredients.filter((itemBun) => itemBun.type === "bun");
  const saucesList = dataIngredients.filter((itemBun) => itemBun.type === "sauce");
  const mainsList = dataIngredients.filter((itemBun) => itemBun.type === "main");

  return (
    <section className={styleBurgerIngredients.section}>
      <h1 className="pt-10 pb-5 text text_type_main-large">Соберите бургер</h1>
      <Tabs active="Булки" />
      <div className={styleBurgerIngredients.container}>
        <h2
          className={`${styleBurgerIngredients.text} pt-10 pb-6 text text_type_main-medium`}
          id="bun"
        >
          Булки
        </h2>
        {bunsList.map((item) => (
          <ItemBurger
            key={item._id}
            {...item}
            modalIngredient={modalIngredient}
            setModalIngredient={setModalIngredient}
          />
        ))}

        <h2
          className={`${styleBurgerIngredients.text} pt-10 pb-6 text text_type_main-medium`}
          id="sauce"
        >
          Соусы
        </h2>
        {saucesList.map((item) => (
          <ItemBurger
            key={item._id}
            {...item}
            modalIngredient={modalIngredient}
            setModalIngredient={setModalIngredient}
          />
        ))}
        <h2
          className={`${styleBurgerIngredients.text} pt-10 pb-6 text text_type_main-medium`}
          id="main"
        >
          Начинки
        </h2>
        {mainsList.map((item) => (
          <ItemBurger
            key={item._id}
            {...item}
            modalIngredient={modalIngredient}
            setModalIngredient={setModalIngredient}
          />
        ))}
      </div>

      {modalIngredient.status && (
        <IngredientDetails
          modalIngredient={modalIngredient}
          setModalIngredient={setModalIngredient}
        />
      )}
    </section>
  );
};

export default BurgerIngredients;
