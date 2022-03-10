import React from "react";

import { ConstructorElement, DragIcon } from "@ya.praktikum/react-developer-burger-ui-components";

import styleBurgerIngredients from "./BurgerIngredients.module.css";
import SumCoin from "../SumCoin/SumCoin";

const BurgerIngredients = () => {
  return (
    <div className={`${styleBurgerIngredients.section} pt-25 pl-4`} >
      <div className="pl-8 pr-8 pb-4">
        <ConstructorElement
          type="top"
          isLocked={true}
          text="Краторная булка N-200i (верх)"
          price={200}
          thumbnail={"https://code.s3.yandex.net/react/code/bun-02.png"}
        />
      </div>
      <div className={styleBurgerIngredients.scroll}>
        <div className={`${styleBurgerIngredients.container}`}>
          <DragIcon />
          <ConstructorElement
            text="Краторная булка N-200i (верх)"
            price={50}
            thumbnail={"https://code.s3.yandex.net/react/code/bun-02.png"}
          />
        </div>
        <div className={`${styleBurgerIngredients.container} pt-4`}>
          <DragIcon />
          <ConstructorElement
            text="Краторная булка N-200i (верх)"
            price={50}
            thumbnail={"https://code.s3.yandex.net/react/code/bun-02.png"}
          />
        </div>
        <div className={`${styleBurgerIngredients.container} pt-4`}>
          <DragIcon />
          <ConstructorElement
            text="Краторная булка N-200i (верх)"
            price={50}
            thumbnail={"https://code.s3.yandex.net/react/code/bun-02.png"}
          />
        </div>
        <div className={`${styleBurgerIngredients.container} pt-4`}>
          <DragIcon />
          <ConstructorElement
            text="Краторная булка N-200i (верх)"
            price={50}
            thumbnail={"https://code.s3.yandex.net/react/code/bun-02.png"}
          />
        </div>
        <div className={`${styleBurgerIngredients.container} pt-4`}>
          <DragIcon />
          <ConstructorElement
            text="Краторная булка N-200i (верх)"
            price={50}
            thumbnail={"https://code.s3.yandex.net/react/code/bun-02.png"}
          />
        </div>
        <div className={`${styleBurgerIngredients.container} pt-4`}>
          <DragIcon />
          <ConstructorElement
            text="Краторная булка N-200i (верх)"
            price={50}
            thumbnail={"https://code.s3.yandex.net/react/code/bun-02.png"}
          />
        </div>
      </div>
      <div className="pl-8 pr-8 pt-4">
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

export default BurgerIngredients;
