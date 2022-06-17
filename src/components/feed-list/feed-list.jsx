import React from "react";
import { Link, useLocation, useRouteMatch } from "react-router-dom";
import { useSelector } from "react-redux";
import FeedItem from "../feed-item/feed-item";

import styleFeedList from "./feed-list.module.css";

const FeedList = () => {
  const { url } = useRouteMatch();
  const location = useLocation();
  const orders = useSelector((store) => store.ws.messages.orders);
  const ingredients = useSelector((store) => store.ingredients.ingredients);

  return (
    !!orders && (
      <div className={styleFeedList.container}>
        {orders.map((order) => (
          <Link
            key={order._id}
            to={{
              pathname: `${url}/${order._id}`,
              state: { background: location },
            }}
            className={styleFeedList.link}
          >
            <FeedItem order={order} ingredients={ingredients} />
          </Link>
        ))}
      </div>
    )
  );
};

export default FeedList;
