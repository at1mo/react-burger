import React from "react";
import PropsTypes from "prop-types";

import { useDispatch, useSelector } from "react-redux";
import { OPEN_INGREDIENT_DETAILS } from "../../services/actions/details";

import { useDrag } from "react-dnd";

import PriceSubtract from "../price-subtract/price-subtract";

import { Counter } from "@ya.praktikum/react-developer-burger-ui-components";

import styleItemBurger from "./item-burger.module.css";

const ItemBurger = (props) => {
  const dispatch = useDispatch();
  const id = props._id;

  const fillings = useSelector((store) => store.burgerConstructor.fillings);
  const bun = useSelector((store) => store.burgerConstructor.bun);
  const burgerIngredients = [...bun, ...bun, ...fillings];
  const count = burgerIngredients.filter((item) => item._id === id).length;

  const openModalIngredient = (ingredient) => {
    dispatch({
      type: OPEN_INGREDIENT_DETAILS,
      payload: ingredient,
    });
  };

  const [{ isDrag }, drag] = useDrag({
    type: props.type,
    item: { id },
    collect: (monitor) => ({
      isDrag: monitor.isDragging(),
    }),
  });

  return (
    !isDrag && (
      <div
        ref={drag}
        className={styleItemBurger.container}
        onClick={() => openModalIngredient(props)}
      >
        <div
          className={
            count > 0
              ? styleItemBurger.counter_active
              : styleItemBurger.counter_inactive
          }
        >
          <Counter count={count} size="default" />
        </div>
        <img
          className={styleItemBurger.image}
          src={props.image}
          alt={props.name}
        />
        <PriceSubtract price={props.price} />
        <p className={styleItemBurger.text}>{props.name}</p>
      </div>
    )
  );
};

ItemBurger.propsTypes = {
  name: PropsTypes.string.isRequired,
  price: PropsTypes.number.isRequired,
  __v: PropsTypes.number,
  image: PropsTypes.string.isRequired,
  modalIngredient: PropsTypes.arrayOf,
  setModalIngredient: PropsTypes.func,
};

export default ItemBurger;
