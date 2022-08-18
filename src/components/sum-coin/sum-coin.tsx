import React, { FC } from "react";
import {
  Button,
  CurrencyIcon,
} from "@ya.praktikum/react-developer-burger-ui-components";

import styleSunCoin from "./sum-coin.module.css";

interface ISumCoin {
  sum: number;
  orderDetails: () => void;
  disabled: boolean;
}

const SumCoin: FC<ISumCoin> = ({ sum, orderDetails, disabled }) => {
  return (
    <div className={`${styleSunCoin.container} pt-10 pr-4 `}>
      <div className={`${styleSunCoin.sum_list} pr-10`}>
        <p className={`${styleSunCoin.sum} text text_type_digits-medium`}>
          {sum}
        </p>
        <CurrencyIcon type={"primary"} />
      </div>
      <Button
        type="primary"
        size="medium"
        onClick={orderDetails}
        disabled={disabled}
      >
        Оформить заказ
      </Button>
    </div>
  );
};

export default SumCoin;
