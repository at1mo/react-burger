import React from "react";

import ItemBurger from "../ItemBurger/ItemBurger";
import Tabs from "../Tabs/Tabs";

import { itemData } from "../../utils/constants";

import styleBurgerConstructor from "./BurgerConstructor.module.css";

const BurgerConstructor = () => {
  return (
    <section className={styleBurgerConstructor.section}>
      <h1 className="pt-10 pb-5 text text_type_main-large">Соберите бургер</h1>
      <Tabs active="Булки" />
      <div className={styleBurgerConstructor.container}>
        <h2
          className={`${styleBurgerConstructor.text} pt-10 pb-6 text text_type_main-medium`}
        >
          Булки
        </h2>
        {itemData.map((item) => {
          if (item.type === "bun") {
            console.log(item);
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
          className={`${styleBurgerConstructor.text} pt-10 pb-6 text text_type_main-medium`}
        >
          Соусы
        </h2>
        {itemData.map((item) => {
          if (item.type === "sauce") {
            console.log(item);
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
          className={`${styleBurgerConstructor.text} pt-10 pb-6 text text_type_main-medium`}
        >
          Начинки
        </h2>
        {itemData.map((item) => {
          if (item.type === "main") {
            console.log(item);
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

export default BurgerConstructor;
