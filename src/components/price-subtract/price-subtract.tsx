import React, { FC } from "react";

import { CurrencyIcon } from "@ya.praktikum/react-developer-burger-ui-components";

import stylePriceSubtract from "./price-subtract.module.css";

interface IPriceSubtract {
  price: number;
}

const PriceSubtract: FC<IPriceSubtract> = ({ price }) => {
  return (
    <div className={`${stylePriceSubtract.container} pt-1 pb-1`}>
      <span className={stylePriceSubtract.text}>{price}</span>
      <CurrencyIcon type="primary" />
    </div>
  );
};

export default PriceSubtract;
