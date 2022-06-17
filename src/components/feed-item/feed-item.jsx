import React, { useMemo } from "react";
import PropsTypes from "prop-types";
import { CurrencyIcon } from "@ya.praktikum/react-developer-burger-ui-components";
import { getDateOrder } from "../../utils/date";

import styleFeedItem from "./feed-item.module.css";
import { statusText } from "../../utils/utils";

const FeedItem = ({ order, ingredients, status }) => {
  const statusOrder = statusText(status);

  const ingredientsInOrder = useMemo(() => {
    return order.ingredients.length && ingredients.length
      ? order.ingredients
          .map((id) => {
            return ingredients.find((ingredient) => ingredient._id === id);
          })
          .filter((data) => data !== undefined)
          .slice(0, 6)
      : [];
  }, [order.ingredients, ingredients]);

  const otherIngredients =
    order.ingredients.slice(6).length !== 0
      ? `+${order.ingredients.slice(6).length}`
      : null;

  const totalPrice = useMemo(() => {
    let total = 0;
    order.ingredients.map((id) => {
      const ingredient = ingredients.find(
        (ingredient) => ingredient._id === id
      );
      if (ingredient) {
        total += ingredient.price || 0;
      }
    });
    return total;
  }, [order.ingredients, ingredients]);

  const sizeContainer = status ? styleFeedItem.large_size : "";

  return (
    <div className={`${styleFeedItem.container} ${sizeContainer}`}>
      <div className={`${styleFeedItem.group} pt-6`}>
        <span
          className={`${styleFeedItem.number} text text_type_digits-default pl-6`}
        >
          #{order.number}
        </span>
        <span
          className={`${styleFeedItem.date} text text_type_main-default text_color_inactive pr-6`}
        >
          {getDateOrder(order.createdAt)}
        </span>
      </div>
      <h3 className={`${styleFeedItem.name} ml-6 mt-6`}>{order.name}</h3>
      <p className={styleFeedItem.status} style={statusOrder.style}>
        {statusOrder.name}
      </p>
      <div className={`${styleFeedItem.ingredients} mt-6 ml-6 mr-6 pb-6`}>
        <div className={styleFeedItem.items}>
          {order &&
            ingredientsInOrder.map((ingredient, index) => (
              <div key={index} className={styleFeedItem.item}>
                {ingredient && (
                  <img
                    className={styleFeedItem.image}
                    src={ingredient.image}
                    alt={`Изоображение "${ingredient.name}"`}
                  />
                )}
              </div>
            ))}
          {otherIngredients && (
            <div className={styleFeedItem.other}>{otherIngredients}</div>
          )}
        </div>
        <div className={styleFeedItem.price}>
          <span
            className={`${styleFeedItem.number} text text_type_digits-default`}
          >
            {totalPrice}
          </span>
          <div className={styleFeedItem.icon}>
            <CurrencyIcon />
          </div>
        </div>
      </div>
    </div>
  );
};

FeedItem.propsTypes = {
  order: PropsTypes.object.isRequired,
  status: PropsTypes.bool,
};

export default FeedItem;
