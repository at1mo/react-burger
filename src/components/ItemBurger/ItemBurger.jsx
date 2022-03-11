import React from "react";
import PropsTypes from "prop-types";

import PriceSubtract from "../PriceSubtract/PriceSubtract";

import { Counter } from "@ya.praktikum/react-developer-burger-ui-components";

import styleItemBurger from "./ItemBurger.module.css";

const ItemBurger = (props) => {
  return (
    <div className={styleItemBurger.container}>
      <div className={props.status}>
        <Counter count={props.count} size="default" />
      </div>
      <img
        className={styleItemBurger.image}
        src={props.image}
        alt={props.name}
      />
      <PriceSubtract price={props.price} space="pt-1 pb-1" />
      <p className={styleItemBurger.text}>{props.name}</p>
    </div>
  );
};

ItemBurger.propsTypes = {
  name: PropsTypes.string.isRequired,
  price: PropsTypes.number.isRequired,
  count: PropsTypes.number,
  image: PropsTypes.string.isRequired,
  status: PropsTypes.bool,
};

export default ItemBurger;
