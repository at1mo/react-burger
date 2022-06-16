import React, { useEffect } from "react";
import { Switch, Route, useLocation, useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";
import { getIngredients } from "../../services/actions/ingredients";

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
  IngredientsPage,
} from "../../pages";
import OrderInfo from "../order-info/order-info";
import { ProtectedRoute } from "../protected-route";
import Modal from "../modal/modal";
import IngredientDetails from "../ingredient-details/ingredient-details";
import styleApp from "./app.module.css"

const App = () => {
  const dispatch = useDispatch();
  const location = useLocation();
  const locationBackground = location.state && location.state.background;
  const history = useHistory();
  const modal = window.history.state !== null ? true : false;

  const returnFromModal = () => {
    history.goBack();
  };

  useEffect(() => {
    dispatch(getIngredients());
  }, [dispatch]);

  return (
    <>
      <AppHeader />
      <Switch location={locationBackground || location}>
        <Route path="/" exact={true}>
          <HomePage />
        </Route>
        <Route path="/feed/:id" exact={true}>
          {!modal && (
            <div className={styleApp.feed}>
              <OrderInfo />
            </div>
          )}
        </Route>
        <Route path="/feed" exact={true}>
          <FeedPage />
        </Route>
        <Route path="/ingredients/:id" exact={true}>
          {!modal && <IngredientsPage />}
        </Route>
        <ProtectedRoute path="/profile/orders/:id" exact={true}>
          {!modal && <OrderInfo />}
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
      {locationBackground && (
        <>
          <Route path="/ingredients/:id" exact={true}>
            <Modal name="Детали ингредиента" closeModal={returnFromModal}>
              <IngredientDetails />
            </Modal>
          </Route>
          <Route
            path="/feed/:id"
            children={
              <Modal closeModal={returnFromModal}>
                <OrderInfo modal={true} />
              </Modal>
            }
          ></Route>
          <Route path="/profile/orders/:id" exact={true}>
            <Modal closeModal={returnFromModal}>
              <OrderInfo />
            </Modal>
          </Route>
        </>
      )}
    </>
  );
};

export default App;

/**
 * TODO:
 * 1. Вынести стили страниц (pages) в отдельный файл
 * 2. Довести до ума спиннер
 * 3. Объеденить общий функционал вывода ошибок и спиннера
 */
