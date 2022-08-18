import React, { FC, useEffect } from "react";
import { useDispatch, useSelector } from "../../utils/hooks";

import FeedDescription from "../../components/feed-description/feed-description";
import FeedList from "../../components/feed-list/feed-list";
import Spinners from "../../components/spinners/spinners";
import {
  wsConnectionAllStart,
  wsConnectionClosed,
} from "../../services/actions/wsAction";

import styleFeed from "./feed.module.css";

export const FeedPage: FC = () => {
  const dispatch = useDispatch();
  const wsConnected = useSelector((store) => store.ws.messages.orders);

  useEffect(() => {
    dispatch(wsConnectionAllStart("/all"));
    return () => {
      dispatch(wsConnectionClosed());
    };
  }, [dispatch]);

  if (!wsConnected) return <Spinners />;

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
