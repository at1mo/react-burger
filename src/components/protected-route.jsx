import React from "react";
import { Route, Redirect, useLocation } from "react-router-dom";

import PropTypes from "prop-types";

export const ProtectedRoute = ({ children, ...rest }) => {
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

ProtectedRoute.propTypes = {
  children: PropTypes.element.isRequired,
};
