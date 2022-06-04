import React from "react";
import { Switch, Route, useRouteMatch, Redirect } from "react-router-dom";
import HistoryOrders from "../../components/history-orders/history-orders";
import PersonalMenu from "../../components/personal-menu/personal-menu";
import Profile from "../../components/profile/profile";

import styleProfile from "./profile.module.css";

export const ProfilePage = () => {
  const { path } = useRouteMatch();

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
