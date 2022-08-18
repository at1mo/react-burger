import React, { FC } from "react";
import { Route, Redirect, useLocation } from "react-router-dom";

interface IProtectedRoute {
  children: React.ReactNode;
  path?: string;
}

export const ProtectedRoute: FC<IProtectedRoute> = ({ children, ...rest }) => {
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
