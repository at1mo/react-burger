import React from "react";
import { useSelector } from "react-redux";

import styleFeedDescription from "./feed-description.module.css";

const FeedDescription = () => {
  const ordersData = useSelector((store) => store.ws.messages);

  const ordersDone = ordersData
    ? ordersData.orders?.filter((order) => order.status === "done")
    : null;
  const ordersPending = ordersData
    ? ordersData.orders?.filter((item) => item.status === "pending")
    : null;

  const total = ordersData ? ordersData.total : 0;
  const totalToday = ordersData ? ordersData.totalToday : 0;

  return (
    <div>
      <div className={`${styleFeedDescription.wrapper} pb-15`}>
        <div className={styleFeedDescription.feed}>
          <h3 className="text text_type_main-medium pb-6">Готовы:</h3>
          <ul
            className={`${styleFeedDescription.feed__list}
            ${styleFeedDescription.orders__reardy} text text_type_digits-default`}
          >
            {ordersDone &&
              ordersDone.slice(0, 20).map((order) => (
                <li key={order._id} className={styleFeedDescription.feed__item}>
                  {order.number}
                </li>
              ))}
          </ul>
        </div>
        <div className={styleFeedDescription.feed}>
          <h3 className="text text_type_main-medium pb-6">В работе:</h3>
          <ul
            className={`${styleFeedDescription.feed__list} text text_type_digits-default`}
          >
            {ordersPending &&
              ordersPending.slice(0, 20).map((order) => (
                <li key={order._id} className={styleFeedDescription.feed__item}>
                  {order.number}
                </li>
              ))}
          </ul>
        </div>
      </div>
      <h3 className="text text_type_main-medium">Выполнено за все время:</h3>
      <p
        className={`${styleFeedDescription.text_number} text text_type_digits-large m-0 pb-15`}
      >
        {total}
      </p>
      <h3 className="text text_type_main-medium">Выполнено за сегодня:</h3>
      <p
        className={`${styleFeedDescription.text_number} text text_type_digits-large m-0`}
      >
        {totalToday}
      </p>
    </div>
  );
};

export default FeedDescription;
