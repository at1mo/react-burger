import React from "react";
import PropsTypes from "prop-types";

import { CurrencyIcon } from "@ya.praktikum/react-developer-burger-ui-components";

import stylePriceSubtract from "./PriceSubtract.module.css";

const PriceSubtract = ({space, price}) => {
  return (
    <div className={`${stylePriceSubtract.container} ${space}`}>
      <span className={stylePriceSubtract.text}>{price}</span>
      <CurrencyIcon />
    </div>
  );
};

PriceSubtract.propsTypes = {
  price: PropsTypes.number.isRequired,
  space: PropsTypes.string
}

export default PriceSubtract;
