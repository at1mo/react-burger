import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { Route, useRouteMatch } from "react-router-dom";
import HistoryOrders from "../../components/history-orders/history-orders";
import PersonalMenu from "../../components/personal-menu/personal-menu";
import Profile from "../../components/profile/profile";
import {
  wsConnectionClosed,
  wsConnectionStart,
} from "../../services/actions/wsAction";
import { getCookie } from "../../utils/cookie";

import styleProfile from "./profile.module.css";

export const ProfilePage = () => {
  const { path } = useRouteMatch();
  const dispatch = useDispatch();
  const token = getCookie("token");

  useEffect(() => {
    dispatch(wsConnectionStart(token));
    return () => {
      dispatch(wsConnectionClosed());
    };
  }, [dispatch, token]);

  return (
    <div className={`${styleProfile.container}`}>
      <PersonalMenu />

      <Route path={`${path}`} exact>
        <Profile />
      </Route>
      <Route path={`${path}/orders`} exact>
        <HistoryOrders />
      </Route>
    </div>
  );
};
