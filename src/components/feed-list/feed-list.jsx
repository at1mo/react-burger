import React from "react";
import { Link, useLocation, useRouteMatch } from "react-router-dom";
import { CurrencyIcon } from "@ya.praktikum/react-developer-burger-ui-components";
import { historyOrders } from "../../utils/constants";

import styleFeedList from "./feed-list.module.css";

const FeedList = () => {
  const { url } = useRouteMatch();
  const location = useLocation();

  return (
    historyOrders && (
      <ul className={styleFeedList.container}>
        {historyOrders.map((item) => (
          <li key={item.id} className={`${styleFeedList.item} p-6 ml-2 mr-2`}>
            <Link
              to={{
                pathname: `${url}/${item.id}`,
                state: { background: location },
              }}
              className={styleFeedList.link}
            >
              <div className={styleFeedList.item__header}>
                <p className={`text text_type_digits-default m-0`}>
                  #{item.id}
                </p>
                <p
                  className={`text text_type_main-default text_color_inactive m-0`}
                >
                  Today, 16:20 i-GMT+3
                </p>
              </div>
              <h2 className={`text text_type_main-medium pt-6 m-0`}>
                {item.title}
              </h2>
              <div className={`${styleFeedList.item__footer} pt-6`}>
                <div className={`${styleFeedList.item__images}`}>
                  <img
                    className={`${styleFeedList.item__image}`}
                    src="http://placehold.jp/64x64.png"
                    alt="Bun"
                  />
                  <img
                    className={`${styleFeedList.item__image}`}
                    src="http://placehold.jp/64x64.png"
                    alt="Bun"
                  />
                </div>
                <div className={`${styleFeedList.item__sum}`}>
                  <p className={`text text_type_digits-default m-0 pr-4`}>
                    {item.sum}
                  </p>
                  <CurrencyIcon type="primary" />
                </div>
              </div>
            </Link>
          </li>
        ))}
      </ul>
    )
  );
};

export default FeedList;
