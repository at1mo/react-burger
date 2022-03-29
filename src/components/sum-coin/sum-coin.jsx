import React, { useContext } from "react";
import PropsTypes from "prop-types";

import { getNumberOrder } from "../api/api";
import { OrderContext } from "../../services/orderContext";

import {
  Button,
  CurrencyIcon,
} from "@ya.praktikum/react-developer-burger-ui-components";

import styleSunCoin from "./sum-coin.module.css";

const SumCoin = ({ sum, idList, setModalActive }) => {
  const { numberOrder, setNumberOrder } = useContext(OrderContext);
  return (
    <div className={`${styleSunCoin.container} pt-10 pr-4 `}>
      <div className={`${styleSunCoin.sum_list} pr-10`}>
        <p className={`${styleSunCoin.sum} text text_type_digits-medium`}>
          {sum}
        </p>
        <CurrencyIcon />
      </div>
      <Button
        type="primary"
        size="medium"
        onClick={() => {
          setModalActive({ status: true });
          getNumberOrder(idList)
            .then((data) => {
              (data.success &&
                setNumberOrder({
                  ...numberOrder,
                  number: data.order.number,
                }))
                !data.success && setNumberOrder({ ...numberOrder, hasError: true });
            })
            .catch((err) => {
              console.log(err);
            });
        }}
      >
        Оформить заказ
      </Button>
    </div>
  );
};

SumCoin.propsTypes = {
  sum: PropsTypes.number.isRequired,
  idList: PropsTypes.arrayOf,
  setModalActive: PropsTypes.func,
};

export default SumCoin;
