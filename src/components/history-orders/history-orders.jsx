import React from "react";
import { CurrencyIcon } from "@ya.praktikum/react-developer-burger-ui-components";
import { historyOrders } from "../../utils/constants";
import styleHistoryOrders from "./history-orders.module.css";

const HistoryOrders = () => {
  const viewHistoryOrder = (item) => {
    console.log(item);
  };

  return (
    historyOrders && (
      <div className={styleHistoryOrders.container}>
        {historyOrders.map((item) => (
          <div
            onClick={() => {
              viewHistoryOrder(item);
            }}
            key={item.id}
            className={`${styleHistoryOrders.item} p-6 mr-2`}
          >
            <div className={styleHistoryOrders.item__header}>
              <p className={`text text_type_digits-default m-0`}>#{item.id}</p>
              <p
                className={`text text_type_main-default text_color_inactive m-0`}
              >
                Today, 16:20 i-GMT+3
              </p>
            </div>
            <h2 className={`text text_type_main-medium pt-6 m-0`}>
              {item.title}
            </h2>
            <p className={`text text_type_main-default pt-2 m-0`}>
              {item.status}
            </p>
            <div className={`${styleHistoryOrders.item__footer} pt-6`}>
              <div className={`${styleHistoryOrders.item__images}`}>
                <img
                  className={`${styleHistoryOrders.item__image}`}
                  src="http://placehold.jp/64x64.png"
                  alt="Bun"
                />
                <img
                  className={`${styleHistoryOrders.item__image}`}
                  src="http://placehold.jp/64x64.png"
                  alt="Bun"
                />
              </div>
              <div className={`${styleHistoryOrders.item__sum}`}>
                <p className={`text text_type_digits-default m-0 pr-4`}>
                  {item.sum}
                </p>
                <CurrencyIcon type="primary" />
              </div>
            </div>
          </div>
        ))}
      </div>
    )
  );
};

export default HistoryOrders;
