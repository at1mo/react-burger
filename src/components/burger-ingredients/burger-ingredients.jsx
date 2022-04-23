import React, { useContext, useRef, useState } from "react";
import PropsTypes from "prop-types";

import { DataContext } from "../../services/appContext";
import Tabs from "../tabs/tabs";
import ItemBurger from "../item-burger/item-burger";
import IngredientDetails from "../ingredient-details/ingredient-details";

import styleBurgerIngredients from "./burger-ingredients.module.css";

const BurgerIngredients = () => {
  const dataIngredients = useContext(DataContext);

  const [currentTab, setTab] = useState("bun");

  const bunRef = useRef(null);
  const sauceRef = useRef(null);
  const mainRef = useRef(null);
  const containerRef = useRef(null);

  const [modalIngredient, setModalIngredient] = useState({
    item: [],
    status: false,
  });

  const bunsList = dataIngredients.filter((itemBun) => itemBun.type === "bun");
  const saucesList = dataIngredients.filter((itemBun) => itemBun.type === "sauce");
  const mainsList = dataIngredients.filter((itemBun) => itemBun.type === "main");

  function onScroll() {
    const currentPosition =
      containerRef.current.offsetTop + containerRef.current.scrollTop;

    const arr = [
      {
        name: "bun",
        position: Math.abs(bunRef.current.offsetTop - currentPosition),
      },
      {
        name: "sauce",
        position: Math.abs(sauceRef.current.offsetTop - currentPosition),
      },
      {
        name: "main",
        position: Math.abs(mainRef.current.offsetTop - currentPosition),
      },
    ];

    const minElement = arr.reduce(
      (acc, el) => (el.position < acc.position ? el : acc),
      { name: "bun", position: Infinity }
    );

    setTab(minElement.name);
  }

  return (
    <section className={styleBurgerIngredients.section}>
      <h1 className="pt-10 pb-5 text text_type_main-large">Соберите бургер</h1>
      <Tabs active="Булки" statusTab={currentTab} setTab={setTab} />
      <div
        className={styleBurgerIngredients.container}
        ref={containerRef}
        onScroll={onScroll}
      >
        <h2
          className={`${styleBurgerIngredients.text} pt-10 pb-6 text text_type_main-medium`}
          id="bun"
          ref={bunRef}
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
          ref={sauceRef}
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
          ref={mainRef}
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
