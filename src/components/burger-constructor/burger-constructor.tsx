import React, { useMemo } from "react";
import { useDrop } from "react-dnd";
import { useDispatch, useSelector } from "../../utils/hooks";

import {
  addBunAction,
  addFillingAction,
  generateIdAction,
  moveItemAction,
  resetConstructorAction,
} from "../../services/actions/constructor";
import {
  closeOrderDetailsAction,
  getOrder,
  openOrderDetails,
} from "../../services/actions/order";
import { useHistory } from "react-router-dom";

import { generateUUID } from "../../utils/generateUUID";

import ItemBurgerConstructor from "../item-burger-constructor/item-burger-constructor";
import OrderDetails from "../order-details/order-details";
import SumCoin from "../sum-coin/sum-coin";

import { ConstructorElement } from "@ya.praktikum/react-developer-burger-ui-components";
import Spinners from "../spinners/spinners";

import styleBurgerConstructors from "./burger-constructor.module.css";
import { TIngredient } from "../../utils/types";

const BurgerConstructor = () => {
  const dispatch = useDispatch();
  const hisroty = useHistory();

  const ingredients = useSelector((store) => store.ingredients.ingredients);
  const bun = useSelector((store) => store.burgerConstructor.bun);
  const fillings = useSelector((store) => store.burgerConstructor.fillings);
  const generateId = useSelector((store) => store.burgerConstructor.generateId);

  const items = [...bun, ...bun, ...fillings];

  const idList = items.map((item) => item._id);
  const { order, orderRequest } = useSelector((store) => store.order);

  const [{ bunIsHover }, dropBun] = useDrop<
    { id: string },
    void,
    { bunIsHover: boolean }
  >({
    accept: "bun",
    drop({ id }) {
      const data: TIngredient = ingredients.find((el) => {
        if (typeof id === "string") {
          return el._id === id;
        } else {
          return "";
        }
      })!;
      dispatch(addBunAction(id, data));
    },
    collect: (monitor) => ({
      bunIsHover: monitor.isOver(),
    }),
  });

  const [{ fillingsIsHover }, dropFillings] = useDrop<
    { id: string },
    void,
    { fillingsIsHover: boolean }
  >({
    accept: ["main", "sauce"],
    drop({ id }) {
      const data: TIngredient = ingredients.find((el) => {
        if (typeof id === "string") {
          return el._id === id;
        } else {
          return "";
        }
      })!;
      dispatch(generateIdAction(generateUUID()));
      dispatch(addFillingAction(id, data));
    },
    collect: (monitor) => ({
      fillingsIsHover: monitor.isOver(),
    }),
  });

  const moveItem = (dragIndex: number, hoverIndex: number) => {
    dispatch(moveItemAction(dragIndex, hoverIndex));
  };

  const sumOrder = useMemo(() => {
    return bun.length
      ? fillings.reduce(
          (previousValue, currentValue) => previousValue + currentValue.price,
          bun[0].price * 2
        )
      : 0;
  }, [bun, fillings]);

  const orderDetails = () => {
    if (localStorage.refreshToken) {
      dispatch(getOrder(idList));
      dispatch(openOrderDetails());
    } else {
      hisroty.push("/login");
    }
  };

  const closeOrderDetails = () => {
    dispatch(closeOrderDetailsAction());
    dispatch(resetConstructorAction());
  };

  if (orderRequest) return <Spinners />;

  const bunIsHoverClass = bunIsHover && styleBurgerConstructors.border_avtive;
  const fillingsIsHoverClass =
    fillingsIsHover && styleBurgerConstructors.border_avtive;

  return (
    <div
      ref={dropFillings}
      className={`${styleBurgerConstructors.section} pt-25 pl-4 pr-4`}
    >
      {bun.length <= 0 ? (
        <div
          ref={dropBun}
          className={`${styleBurgerConstructors.placeholder__bun} ${bunIsHoverClass} ml-8 mt-4 text`}
        >
          Пожалуйста, перенесите сюда булку для создания заказа
        </div>
      ) : (
        <div
          ref={dropBun}
          className={`${styleBurgerConstructors.item} ${bunIsHoverClass} pl-8`}
        >
          <ConstructorElement
            type="top"
            isLocked={true}
            text={`${bun[0].name} (верх)`}
            price={bun[0].price}
            thumbnail={bun[0].image}
          />
        </div>
      )}
      <div
        className={`${styleBurgerConstructors.container} ${fillingsIsHoverClass}`}
      >
        {fillings.length <= 0 ? (
          <div
            className={`${styleBurgerConstructors.placeholder} ml-8 mt-4 text`}
          >
            Пожалуйста, перенесите сюда ингредиенты для создания заказа
          </div>
        ) : (
          fillings.map((item, index) => {
            return (
              <ItemBurgerConstructor
                key={generateId[index]}
                index={index}
                item={item}
                moveItem={moveItem}
              />
            );
          })
        )}
      </div>
      {bun.length > 0 && (
        <div className={`${styleBurgerConstructors.item} pl-8 pr-8 pt-4`}>
          <ConstructorElement
            type="bottom"
            isLocked={true}
            text={`${bun[0].name} (низ)`}
            price={bun[0].price}
            thumbnail={bun[0].image}
          />
        </div>
      )}
      <SumCoin
        sum={sumOrder}
        orderDetails={orderDetails}
        disabled={sumOrder <= 0}
      />

      {order && (
        <OrderDetails
          closeModalOrderDetails={closeOrderDetails}
          numOrder={order.number}
        />
      )}
    </div>
  );
};

export default BurgerConstructor;
