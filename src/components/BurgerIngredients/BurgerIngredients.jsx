import React from "react";

import ItemBurger from "../ItemBurger/ItemBurger";
import Tabs from "../Tabs/Tabs";

import { itemData } from "../../utils/constants";

import styleBurgerIngredients from "./BurgerIngredients.module.css";

const BurgerIngredients = () => {
  return (
    <section className={styleBurgerIngredients.section}>
      <h1 className="pt-10 pb-5 text text_type_main-large">Соберите бургер</h1>
      <Tabs active="Булки" />
      <div className={styleBurgerIngredients.container}>
        <h2
          className={`${styleBurgerIngredients.text} pt-10 pb-6 text text_type_main-medium`}
        >
          Булки
        </h2>
        {itemData.map((item) => {
          if (item.type === "bun") {
            return (
              <ItemBurger
                key={item._id}
                name={item.name}
                price={item.price}
                image={item.image}
              />
            );
          }
        })}
        <h2
          className={`${styleBurgerIngredients.text} pt-10 pb-6 text text_type_main-medium`}
        >
          Соусы
        </h2>
        {itemData.map((item) => {
          if (item.type === "sauce") {
            return (
              <ItemBurger
                key={item._id}
                name={item.name}
                price={item.price}
                image={item.image}
              />
            );
          }
        })}
        <h2
          className={`${styleBurgerIngredients.text} pt-10 pb-6 text text_type_main-medium`}
        >
          Начинки
        </h2>
        {itemData.map((item) => {
          if (item.type === "main") {
            return (
              <ItemBurger
                key={item._id}
                name={item.name}
                price={item.price}
                image={item.image}
              />
            );
          }
        })}
      </div>
    </section>
  );
};

export default BurgerIngredients;
