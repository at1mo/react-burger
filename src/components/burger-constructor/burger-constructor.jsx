import React, { useState } from "react";
import PropsTypes from "prop-types";

import OrderDetails from "../order-details/order-details";
import { sortDesc } from "../../utils/sort";

import {
  ConstructorElement,
  DragIcon,
} from "@ya.praktikum/react-developer-burger-ui-components";

import styleBurgerConstructors from "./burger-constructor.module.css";
import SumCoin from "../sum-coin/sum-coin";

const BurgerConstructor = ({ data }) => {
  const [modalActive, setModalActive] = useState({ status: false });

  const orderList = data
    .filter((itemBun) => itemBun.type !== "bun")
    .sort(sortDesc);

  let sumOrder = 400;

  return (
    <div className={`${styleBurgerConstructors.section} pt-25 pl-4 pr-4`}>
      <div className={`${styleBurgerConstructors.item} pl-8`}>
        <ConstructorElement
          type="top"
          isLocked={true}
          text="Краторная булка N-200i (верх)"
          price={200}
          thumbnail={"https://code.s3.yandex.net/react/code/bun-02.png"}
        />
      </div>
      <div className={styleBurgerConstructors.container}>
        {orderList.map((item) => {
          sumOrder += item.price;
          return (
            <div
              className={`${styleBurgerConstructors.item} pt-4`}
              key={item._id}
            >
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
          text="Краторная булка N-200i (низ)"
          price={200}
          thumbnail={"https://code.s3.yandex.net/react/code/bun-02.png"}
        />
      </div>
      <SumCoin sum={sumOrder} setModalActive={setModalActive} />

      {modalActive.status && (
        <OrderDetails
          modalActive={modalActive}
          setModalActive={setModalActive}
          numOrder="034536"
        />
      )}
    </div>
  );
};

BurgerConstructor.propsTypes = {
  data: PropsTypes.arrayOf.isRequired,
  modalActive: PropsTypes.bool,
  setModalActive: PropsTypes.func,
};

export default BurgerConstructor;
