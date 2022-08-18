import React, { FC } from "react";
import { Link, useLocation } from "react-router-dom";

import { useDrag } from "react-dnd";
import PriceSubtract from "../price-subtract/price-subtract";
import { Counter } from "@ya.praktikum/react-developer-burger-ui-components";
import styleItemBurger from "./item-burger.module.css";
import { useSelector } from "../../utils/hooks";

interface IItemBurger {
  _id: string;
  image: string;
  name: string;
  price: number;
  __v: number;
  type: string;
}

const ItemBurger: FC<IItemBurger> = (props) => {
  const location = useLocation();
  const id = props._id;

  const fillings = useSelector((store) => store.burgerConstructor.fillings);
  const bun = useSelector((store) => store.burgerConstructor.bun);
  const burgerIngredients = [...bun, ...bun, ...fillings];
  const count = burgerIngredients.filter((item) => item._id === id).length;

  const [{ isDrag }, drag] = useDrag({
    type: props.type,
    item: { id },
    collect: (monitor) => ({
      isDrag: monitor.isDragging(),
    }),
  });

  return (
    <>
      {!isDrag && (
        <Link
          to={{
            pathname: `/ingredients/${id}`,
            state: { background: location },
          }}
          className={styleItemBurger.link}
        >
          <div ref={drag} className={styleItemBurger.container}>
            <div
              className={
                count > 0
                  ? styleItemBurger.counter_active
                  : styleItemBurger.counter_inactive
              }
            >
              <Counter count={count} size="default" />
            </div>
            <img
              className={styleItemBurger.image}
              src={props.image}
              alt={props.name}
            />
            <PriceSubtract price={props.price} />
            <p className={styleItemBurger.text}>{props.name}</p>
          </div>
        </Link>
      )}
    </>
  );
};

export default ItemBurger;
