import React, { useEffect, useMemo } from "react";
import { Link, useLocation, useRouteMatch } from "react-router-dom";
import { useSelector } from "react-redux";

import Spinners from "../spinners/spinners";

import styleHistoryOrders from "./history-orders.module.css";
import FeedItem from "../feed-item/feed-item";

const HistoryOrders = () => {
  const { url } = useRouteMatch();
  const location = useLocation();
  const orders = useSelector((store) => store.ws.orders);
  const ingredients = useSelector((store) => store.ingredients.ingredients);

  if (!orders.orders) return <Spinners />;

  const reverseOrders = orders.orders.reduceRight(function (arr, last) {
    return (arr = arr.concat(last));
  }, []);

  return (
    !!orders.orders && (
      <div className={`${styleHistoryOrders.container} mt-10`}>
        {reverseOrders.map((order) => (
          <Link
            key={order._id}
            to={{
              pathname: `${url}/${order._id}`,
              state: { background: location },
            }}
            className={styleHistoryOrders.link}
          >
            <FeedItem
              order={order}
              ingredients={ingredients}
              status={order.status}
            />
          </Link>
        ))}
      </div>
    )
  );
};

export default HistoryOrders;
