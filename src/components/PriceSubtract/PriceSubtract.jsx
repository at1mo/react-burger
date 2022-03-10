import React from "react";
import PropsTypes from "prop-types";

import { CurrencyIcon } from "@ya.praktikum/react-developer-burger-ui-components";

import stylePriceSubtract from "./PriceSubtract.module.css";

const PriceSubtract = (props) => {
  return (
    <div className={`${stylePriceSubtract.container} ${props.space}`}>
      <span className={stylePriceSubtract.text}>{props.price}</span>
      <CurrencyIcon />
    </div>
  );
};

PriceSubtract.propsTypes = {
  price: PropsTypes.number,
  space: PropsTypes.string
}

export default PriceSubtract;
