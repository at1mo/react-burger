import React, { useRef, useState } from "react";

import { useDispatch, useSelector } from "react-redux";

import Tabs from "../tabs/tabs";
import ItemBurger from "../item-burger/item-burger";
import IngredientDetails from "../ingredient-details/ingredient-details";
import { CLOSE_INGREDIENT_DETAILS } from "../../services/actions/details";

import styleBurgerIngredients from "./burger-ingredients.module.css";

const BurgerIngredients = () => {
  const dispatch = useDispatch();

  const dataIngredients = useSelector((store) => store.ingredients.ingredients);
  const { isOpen, ingredient } = useSelector((state) => state.details);

  const closeModalIngredient = () => {
    dispatch({
      type: CLOSE_INGREDIENT_DETAILS,
    });
  };

  const [currentTab, setTab] = useState("bun");

  const bunRef = useRef(null);
  const sauceRef = useRef(null);
  const mainRef = useRef(null);
  const containerRef = useRef(null);

  const bunsList = dataIngredients.filter((itemBun) => itemBun.type === "bun");
  const saucesList = dataIngredients.filter(
    (itemBun) => itemBun.type === "sauce"
  );
  const mainsList = dataIngredients.filter(
    (itemBun) => itemBun.type === "main"
  );

  function onScroll() {
    const currentPosition =
      containerRef.current.offsetTop + containerRef.current.scrollTop;

    const arrayPostions = [
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

    const minElement = arrayPostions.reduce(
      (acc, el) => (el.position < acc.position ? el : acc),
      { name: "bun", position: Infinity }
    );

    setTab(minElement.name);
  }

  return (
    <section className={styleBurgerIngredients.section}>
      <h1 className="pt-10 pb-5 text text_type_main-large">Соберите бургер</h1>
      <Tabs statusTab={currentTab} setTab={setTab} />
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
          <ItemBurger key={item._id} {...item} />
        ))}

        <h2
          className={`${styleBurgerIngredients.text} pt-10 pb-6 text text_type_main-medium`}
          id="sauce"
          ref={sauceRef}
        >
          Соусы
        </h2>
        {saucesList.map((item) => (
          <ItemBurger key={item._id} {...item} />
        ))}
        <h2
          className={`${styleBurgerIngredients.text} pt-10 pb-6 text text_type_main-medium`}
          id="main"
          ref={mainRef}
        >
          Начинки
        </h2>
        {mainsList.map((item) => (
          <ItemBurger key={item._id} {...item} />
        ))}
      </div>

      {isOpen && (
        <IngredientDetails
          modalIngredient={ingredient}
          closeModalIngredient={closeModalIngredient}
        />
      )}
    </section>
  );
};

export default BurgerIngredients;
