import React from "react";
import PropsTypes from "prop-types";

import { useDispatch } from "react-redux";
import { OPEN_INGREDIENT_DETAILS } from "../../services/actions/details";

import PriceSubtract from "../price-subtract/price-subtract";

import { Counter } from "@ya.praktikum/react-developer-burger-ui-components";

import styleItemBurger from "./item-burger.module.css";

const ItemBurger = (props) => {
  const dispatch = useDispatch();

  const openModalIngredient = (ingredient) => {
    dispatch({
      type: OPEN_INGREDIENT_DETAILS,
      payload: ingredient,
    })
  }

  return (
    <div className={styleItemBurger.container} onClick={() => openModalIngredient(props)}>
      <div
        className={props.__v > 0 ? styleItemBurger.counter_active : styleItemBurger.counter_inactive}>
        <Counter count={props.__v} size="default" />
      </div>
      <img className={styleItemBurger.image} src={props.image} alt={props.name} />
      <PriceSubtract price={props.price} />
      <p className={styleItemBurger.text}>{props.name}</p>
    </div>
  );
};

ItemBurger.propsTypes = {
  name: PropsTypes.string.isRequired,
  price: PropsTypes.number.isRequired,
  __v: PropsTypes.number.isRequired,
  image: PropsTypes.string.isRequired,
};

export default ItemBurger;
