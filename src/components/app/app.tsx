import React, { FC, useEffect } from "react";
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
import styleApp from "./app.module.css";

export interface TLocationState extends Location {
  background?: any;
  from?: {
    pathname: string;
  };
}

const App: FC = () => {
  const dispatch = useDispatch();
  const location = useLocation<TLocationState>();
  const locationBackground = location.state && location.state.background;
  const history = useHistory();

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
        <Route path="/" exact>
          <HomePage />
        </Route>

        <Route path="/feed" exact>
          <FeedPage />
        </Route>

        <Route path="/feed/:id">
          <div className={styleApp.feed}>
            <OrderInfo />
          </div>
        </Route>

        <ProtectedRoute path="/profile/orders/:id">
          <div className={styleApp.feed}>
            <OrderInfo />
          </div>
        </ProtectedRoute>

        <ProtectedRoute path="/profile">
          <ProfilePage />
        </ProtectedRoute>

        <Route path="/login" exact>
          <LoginPage />
        </Route>

        <Route path="/register" exact>
          <RegisterPage />
        </Route>

        <Route path="/forgot-password" exact>
          <ForgotPasswordPage />
        </Route>

        <Route path="/reset-password" exact>
          <ResetPasswordPage />
        </Route>

        <Route path="/ingredients/:id">
          <IngredientsPage />
        </Route>

        <Route>
          <NotFound404 />
        </Route>
      </Switch>
      {locationBackground && (
        <>
          <Route path="/ingredients/:id">
            <Modal name="Детали ингредиента" closeModal={returnFromModal}>
              <IngredientDetails />
            </Modal>
          </Route>
          <Route path="/feed/:id">
            <Modal closeModal={returnFromModal}>
              <OrderInfo modal={true} />
            </Modal>
          </Route>
          <Route path="/profile/orders/:id">
            <Modal closeModal={returnFromModal}>
              <OrderInfo modal={true} />
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
