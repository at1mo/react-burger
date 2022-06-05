import React, { useEffect } from "react";
import { Route, Redirect, useLocation } from "react-router-dom";
import { useDispatch } from "react-redux";
import { getToken } from "../services/actions/auth";

import PropTypes from "prop-types";

export const ProtectedRoute = ({ children, ...rest }) => {
  const dispatch = useDispatch();
  const location = useLocation();

  const refreshToken = localStorage.refreshToken;

  useEffect(() => {
    if (refreshToken) {
      dispatch(getToken());
    }
  }, [dispatch, refreshToken]);

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
