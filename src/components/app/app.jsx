import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import AppHeader from "../app-header/app-header";
import {
  FeedPage,
  HomePage,
  LoginPage,
  RegisterPage,
  ForgotPasswordPage,
  NotFound404,
  ProfilePage,
} from "../../pages";

import styleApp from "./app.module.css";

const App = () => {
  return (
    <Router>
      <AppHeader />
      <Switch>
        <Route path="/" exact>
          <HomePage />
        </Route>
        <Route path="/feed" exact>
          <FeedPage />
        </Route>
        <Route path="/profile" exact>
          <ProfilePage />
        </Route>
        <Route path="/login" exact>
          <LoginPage />
        </Route>
        <Route path="/registr" exact>
          <RegisterPage />
        </Route>
        <Route path="/forgot-password" exact>
          <ForgotPasswordPage />
        </Route>
        <Route>
          <NotFound404 />
        </Route>
      </Switch>
    </Router>
  );
};

export default App;
