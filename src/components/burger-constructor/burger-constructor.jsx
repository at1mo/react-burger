import React, { useContext, useState } from "react";
import PropsTypes from "prop-types";

import { OrderContext } from "../../services/orderContext";
import { addedBurgers } from "../../utils/constants";
import OrderDetails from "../order-details/order-details";
import { sortDesc } from "../../utils/sort";

import {
  ConstructorElement,
  DragIcon,
} from "@ya.praktikum/react-developer-burger-ui-components";

import styleBurgerConstructors from "./burger-constructor.module.css";
import SumCoin from "../sum-coin/sum-coin";

const BurgerConstructor = () => {
  const data = addedBurgers; // for test
  const {numberOrder} = useContext(OrderContext);

  const [modalActive, setModalActive] = useState({ status: false });

  const [bunList] = data.filter((item) => item.type === "bun");
  const ordersList = data.filter((item) => item.type !== "bun").sort(sortDesc);

  const idList = ordersList.map((item) => item._id) // Придумать лучшее решение
  idList.push(bunList._id)

  const sumOrder = ordersList.reduce(
    (previousValue, currentValue) => previousValue + currentValue.price,
    bunList.price*2
  );

  return (
    <div className={`${styleBurgerConstructors.section} pt-25 pl-4 pr-4`}>
      <div className={`${styleBurgerConstructors.item} pl-8`}>
        <ConstructorElement
          type="top"
          isLocked={true}
          text={bunList.name}
          price={bunList.price}
          thumbnail={bunList.image}
        />
      </div>
      <div className={styleBurgerConstructors.container}>
        {ordersList.map((item, index) => {
          return (
            <div className={`${styleBurgerConstructors.item} pt-4`} key={index}>
              <div className={styleBurgerConstructors.drag__item}>
                <DragIcon />
              </div>
              <ConstructorElement
                text={item.name}
                price={item.price}
                thumbnail={item.image}
              />
            </div>
          );
        })}
      </div>
      <div className={`${styleBurgerConstructors.item} pl-8 pr-8 pt-4`}>
        <ConstructorElement
          type="bottom"
          isLocked={true}
          text={bunList.name}
          price={bunList.price}
          thumbnail={bunList.image}
        />
      </div>
      <SumCoin sum={sumOrder} idList={idList} setModalActive={setModalActive} />

      {!numberOrder.hasError && (
        modalActive.status && (
          <OrderDetails
            modalActive={modalActive}
            setModalActive={setModalActive}
            numOrder={numberOrder.number}
          />
        )
      )}
    </div>
  );
};

export default BurgerConstructor;
