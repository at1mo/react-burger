import React from "react";
import FeedDescription from "../../components/feed-description/feed-description";
import FeedList from "../../components/feed-list/feed-list";

import styleFeed from "./feed.module.css";

export const FeedPage = () => {
  return (
    <div className={styleFeed.container}>
      <h1 className="text text_type_main-large pt-10 pb-5">Лента заказов</h1>
      <div className={styleFeed.wrapper}>
        <FeedList />
        <FeedDescription />
      </div>
    </div>
  );
};
