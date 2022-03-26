import React from "react";
import PropsTypes from "prop-types";

import { CurrencyIcon } from "@ya.praktikum/react-developer-burger-ui-components";

import stylePriceSubtract from "./price-subtract.module.css";

const PriceSubtract = ({price}) => {
  return (
    <div className={`${stylePriceSubtract.container} pt-1 pb-1`}>
      <span className={stylePriceSubtract.text}>{price}</span>
      <CurrencyIcon />
    </div>
  );
};

PriceSubtract.propsTypes = {
  price: PropsTypes.number.isRequired,
}

export default PriceSubtract;
