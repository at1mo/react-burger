import React from "react";
import {
  Switch,
  Route,
  useLocation,
} from "react-router-dom";

import AppHeader from "../app-header/app-header";
import {
  FeedPage,
  HomePage,
  LoginPage,
  RegisterPage,
  ForgotPasswordPage,
  NotFound404,
  ProfilePage,
  ResetPasswordPage,
} from "../../pages";
import HistoryOrder from "../history-order/history-order";
import { ProtectedRoute } from "../protected-route";

const App = () => {
  const location = useLocation();
  const locationBackground = location.state && location.state.background;

  return (
    <>
      <AppHeader />
      <Switch location={locationBackground || location} >
        <Route path="/" exact={true}>
          <HomePage />
        </Route>
        <Route path="/feed" exact>
          <FeedPage />
        </Route>
        <ProtectedRoute path="/profile/orders/:id">
          <HistoryOrder />
        </ProtectedRoute>
        <ProtectedRoute path="/profile" exact={false}>
          <ProfilePage />
        </ProtectedRoute>
        <Route path="/login" exact={true}>
          <LoginPage />
        </Route>
        <Route path="/register" exact={true}>
          <RegisterPage />
        </Route>
        <Route path="/forgot-password" exact={true}>
          <ForgotPasswordPage />
        </Route>
        <Route path="/reset-password" exact={true}>
          <ResetPasswordPage />
        </Route>
        <Route>
          <NotFound404 />
        </Route>
      </Switch>
    </>
  );
};

export default App;

/**
 * TODO:
 * 1. Вынести стили страниц в отдельный файл
 */
