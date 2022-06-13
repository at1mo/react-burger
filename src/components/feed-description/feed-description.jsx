import React from "react";
import { historyOrders } from "../../utils/constants";

import styleFeedDescription from "./feed-description.module.css";

const FeedDescription = () => {
  return (
    <div>
      <div className={`${styleFeedDescription.wrapper} pb-15`}>
        <div className={styleFeedDescription.feed}>
          <h3 className="text text_type_main-medium pb-6">Готовы:</h3>
          <ul
            className={`${styleFeedDescription.feed__list}
            ${styleFeedDescription.orders__reardy} text text_type_digits-default`}
          >
            {historyOrders.map((item) => (
              <li key={item.id} className="pb-2">
                {item.id}
              </li>
            ))}
          </ul>
        </div>
        <div className={styleFeedDescription.feed}>
          <h3 className="text text_type_main-medium pb-6">В работе:</h3>
          <ul
            className={`${styleFeedDescription.feed__list} text text_type_digits-default`}
          >
            <li className="pb-2">034533</li>
            <li className="pb-2">034533</li>
            <li className="pb-2">034533</li>
          </ul>
        </div>
      </div>
      <h3 className="text text_type_main-medium">Выполнено за все время:</h3>
      <p
        className={`${styleFeedDescription.text_number} text text_type_digits-large m-0 pb-15`}
      >
        28 752
      </p>
      <h3 className="text text_type_main-medium">Выполнено за сегодня:</h3>
      <p
        className={`${styleFeedDescription.text_number} text text_type_digits-large m-0`}
      >
        138
      </p>
    </div>
  );
};

export default FeedDescription;
