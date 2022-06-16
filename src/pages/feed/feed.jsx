import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import FeedDescription from "../../components/feed-description/feed-description";
import FeedList from "../../components/feed-list/feed-list";
import {
  wsConnectionAllStart,
  wsConnectionClosed,
} from "../../services/actions/wsAction";

import styleFeed from "./feed.module.css";

export const FeedPage = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(wsConnectionAllStart());
    return () => {
      dispatch(wsConnectionClosed());
    };
  }, [dispatch]);

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
