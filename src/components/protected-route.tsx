import React, { FC } from "react";
import { Route, Redirect, useLocation, RouteProps } from "react-router-dom";

export const ProtectedRoute: FC<RouteProps> = ({ children, ...rest }) => {
  const location = useLocation();

  const refreshToken = localStorage.refreshToken;

  return (
    <Route
      {...rest}
      render={() =>
        refreshToken ? (
          children
        ) : (
          <Redirect
            to={{
              pathname: "/login",
              state: { from: location },
            }}
          />
        )
      }
    />
  );
};
