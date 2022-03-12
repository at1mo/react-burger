import React from "react";

import {
  ConstructorElement,
  DragIcon,
} from "@ya.praktikum/react-developer-burger-ui-components";

import { itemData } from "../../utils/constants";

import styleBurgerConstructors from "./BurgerConstructor.module.css";
import SumCoin from "../SumCoin/SumCoin";

const BurgerConstructor = () => {
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
        {itemData.map((item) => {
          if (item.type !== "bun") {
            return (
              <div
                className={`${styleBurgerConstructors.item} pt-4`}
                key={item._id}
              >
                <DragIcon />
                <ConstructorElement
                  text={item.name}
                  price={item.price}
                  thumbnail={item.image}
                />
              </div>
            );
          }
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
      <SumCoin sum="611" />
    </div>
  );
};

export default BurgerConstructor;
