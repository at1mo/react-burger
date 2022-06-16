import React, { useEffect, useMemo } from "react";
import PropsTypes from "prop-types";
import { CurrencyIcon } from "@ya.praktikum/react-developer-burger-ui-components";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { statusText } from "../../utils/utils";
import { getDateOrder } from "../../utils/date";
import { getCookie } from "../../utils/cookie";
import {
  wsConnectionAllStart,
  wsConnectionClosed,
  wsConnectionStart,
} from "../../services/actions/wsAction";

import styleOrderInfo from "./order-info.module.css";

const OrderInfo = ({ modal = false }) => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const orders = useSelector((store) => store.ws.messages);
  const userOrders = useSelector((store) => store.ws.orders);
  const ingredients = useSelector((store) => store.ingredients.ingredients);

  const order = orders.orders?.find((order) => order._id === id)
    ? orders.orders?.find((order) => order._id === id)
    : userOrders.orders?.find((order) => order._id === id);

  useEffect(() => {
    const token = getCookie("token");
    if (token) {
      dispatch(wsConnectionStart(token.split("Bearer ")[1]));
    }
    dispatch(wsConnectionAllStart());
    return () => {
      dispatch(wsConnectionClosed());
    };
  }, [dispatch]);

  const ingredientsOrder =
    orders &&
    order?.ingredients.map((id) => {
      return ingredients.find((ingredient) => ingredient._id === id);
    });

  const ingredientsCounter = ingredientsOrder?.reduce(
    (prev, curr) => {
      const id = curr?._id;
      prev.count[id] = (prev.count[id] || 0) + 1;
      return prev;
    },
    { count: {} }
  );

  const uniqIngredientsOrder = ingredientsOrder
    ?.filter((item, pos, arr) => arr.lastIndexOf(item) === pos)
    .sort((a, b) => {
      if (a.type === "bun") return -1;
      if (b.type === "bun") return 1;
      return a.type.localeCompare(b.type);
    });

  const status = useMemo(() => {
    return order ? statusText(order.status) : null;
  }, [order]);

  const total = useMemo(() => {
    return ingredientsOrder
      ? ingredientsOrder.reduce((prev, cur) => prev + cur.price, 0)
      : 0;
  }, [ingredientsOrder]);

  return (
    !!order && (
      <div className={styleOrderInfo.container}>
        <div
          className={
            modal
              ? `${styleOrderInfo.title_modal} pb-10 text text_type_digits-default`
              : `${styleOrderInfo.title} pb-10 text text_type_digits-default`
          }
        >
          #{order.number}
        </div>
        <div className="text text_type_main-medium pt-5 pb-3">{order.name}</div>
        <div
          className={`${styleOrderInfo.status} text text_type_main-default pb-15`}
          style={status.style}
        >
          {status.name}
        </div>
        <div className="text text_type_main-medium pb-6">Состав:</div>
        <div className={`${styleOrderInfo.items} pr-6`}>
          {uniqIngredientsOrder.map((ingredient) => (
            <div key={ingredient._id} className={`${styleOrderInfo.item} pb-4`}>
              <div className={`${styleOrderInfo.item}`}>
                <div className={`${styleOrderInfo.item__background} mr-4`}>
                  <img
                    className={styleOrderInfo.item__image}
                    src={ingredient.image_mobile}
                    alt={`Изоображение ${ingredient.name}`}
                  />
                </div>
                <p className="text text_type_main-default pr-4">
                  {ingredient.name}
                </p>
              </div>
              <div className={`${styleOrderInfo.item__sum}`}>
                <p className="text text_type_main-default">
                  {ingredientsCounter?.count[ingredient._id]} x{" "}
                  {ingredient.price}
                </p>
                <CurrencyIcon />
              </div>
            </div>
          ))}
        </div>

        <div className={`${styleOrderInfo.item} pt-10`}>
          <p className="text text_type_main-default text_color_inactive">
            {getDateOrder(order.createdAt)}
          </p>
          <div className={`${styleOrderInfo.item__sum}`}>
            <p className="text text_type_digits-default">{total}</p>
            <CurrencyIcon />
          </div>
        </div>
      </div>
    )
  );
};

OrderInfo.propsTypes = {
  modal: PropsTypes.bool,
};

export default OrderInfo;
