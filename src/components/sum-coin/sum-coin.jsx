import React from "react";
import PropsTypes from "prop-types";

import {
  Button,
  CurrencyIcon,
} from "@ya.praktikum/react-developer-burger-ui-components";

import styleSunCoin from "./sum-coin.module.css";

const SumCoin = ({ sum, setModalActive }) => {
  return (
    <div className={`${styleSunCoin.container} pt-10 pr-4 `}>
      <div className={`${styleSunCoin.sum_list} pr-10`}>
        <p className={`${styleSunCoin.sum} text text_type_digits-medium`}>
          {sum}
        </p>
        <CurrencyIcon />
      </div>
      <Button type="primary" size="medium" onClick={() => setModalActive({status: true})}>
        Оформить заказ
      </Button>
    </div>
  );
};

SumCoin.propsTypes = {
  sum: PropsTypes.number.isRequired,
  setModalActive: PropsTypes.func,
};

export default SumCoin;
