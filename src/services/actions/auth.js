import {
  forgotPasswordRequest,
  loginRequest,
  registerRequest,
  logoutRequest,
  tokenRequest,
  resetPasswordRequest,
  getDataUserRequest,
  updateDataUserRequest,
} from "../../utils/api";
import { deleteCookie, setCookie } from "../../utils/cookie";

export const FORGOT_PASSWORD_REQUEST = "FORGOT_PASSWORD_REQUEST";
export const FORGOT_PASSWORD_FAILED = "FORGOT_PASSWORD_FAILED";
export const FORGOT_PASSWORD_SUCCESS = "FORGOT_PASSWORD_SUCCESS";

export const RESET_PASSWORD_REQUEST = "RESET_PASSWORD_REQUEST";
export const RESET_PASSWORD_FAILED = "RESET_PASSWORD_FAILED";
export const RESET_PASSWORD_SUCCESS = "RESET_PASSWORD_SUCCESS";

export const LOGIN_REQUEST = "LOGIN_REQUEST";
export const LOGIN_FAILED = "LOGIN_FAILED";
export const LOGIN_SUCCESS = "LOGIN_SUCCESS";

export const REGISTER_REQUEST = "REGISTER_REQUEST";
export const REGISTER_FAILED = "REGISTER_FAILED";
export const REGISTER_SUCCESS = "REGISTER_SUCCESS";

export const LOGOUT_REQUEST = "LOGOUT_REQUEST";
export const LOGOUT_FAILED = "LOGOUT_FAILED";
export const LOGOUT_SUCCESS = "LOGOUT_SUCCESS";

export const TOKEN_REQUEST = "TOKEN_REQUEST";
export const TOKEN_FAILED = "TOKEN_FAILED";
export const TOKEN_SUCCESS = "TOKEN_SUCCESS";

export const USER_REQUEST = "USER_REQUEST";
export const USER_FAILED = "USER_FAILED";
export const USER_SUCCESS = "USER_SUCCESS";

export const USER_UPDATE_REQUEST = "USER_UPDATE_REQUEST";
export const USER_UPDATE_FAILED = "USER_UPDATE_FAILED";
export const USER_UPDATE_SUCCESS = "USER_UPDATE_SUCCESS";

export function forgotPassword(email, redirect) {
  return function (dispatch) {
    dispatch({
      type: FORGOT_PASSWORD_REQUEST,
    });
    forgotPasswordRequest(email)
      .then((res) => {
        if (res && res.success) {
          dispatch({
            type: FORGOT_PASSWORD_SUCCESS,
          });
          redirect();
        } else {
          dispatch({
            type: FORGOT_PASSWORD_FAILED,
          });
        }
      })
      .catch(() => {
        dispatch({
          type: FORGOT_PASSWORD_FAILED,
        });
      });
  };
}

export function resetPassword(form, redirect) {
  return function (dispatch) {
    dispatch({
      type: RESET_PASSWORD_REQUEST,
    });
    resetPasswordRequest(form)
      .then((res) => {
        if (res && res.success) {
          dispatch({
            type: RESET_PASSWORD_SUCCESS,
          });
          redirect();
        } else {
          dispatch({
            type: RESET_PASSWORD_FAILED,
          });
        }
      })
      .catch(() => {
        dispatch({
          type: RESET_PASSWORD_FAILED,
        });
      });
  };
}

export function login(form) {
  return function (dispatch) {
    dispatch({
      type: LOGIN_REQUEST,
    });
    loginRequest(form)
      .then((res) => {
        if (res && res.success) {
          const accessToken = res.accessToken.split("Bearer ")[1];
          const refreshToken = res.refreshToken;
          setCookie("token", accessToken);
          localStorage.setItem("refreshToken", refreshToken);
          dispatch({
            type: LOGIN_SUCCESS,
            user: res.user,
          });
        } else {
          dispatch({
            type: LOGIN_FAILED,
          });
        }
      })
      .catch(() => {
        dispatch({
          type: LOGIN_FAILED,
        });
      });
  };
}

export function register(form, redirect) {
  return function (dispatch) {
    dispatch({
      type: REGISTER_REQUEST,
    });
    registerRequest(form)
      .then((res) => {
        if (res && res.success) {
          const accessToken = res.accessToken.split("Bearer ")[1];
          const refreshToken = res.refreshToken;
          setCookie("token", accessToken);
          localStorage.setItem("refreshToken", refreshToken);
          dispatch({
            type: REGISTER_SUCCESS,
            user: res.user,
          });
          redirect();
        } else {
          dispatch({
            type: REGISTER_FAILED,
          });
        }
      })
      .catch(() => {
        dispatch({
          type: REGISTER_FAILED,
        });
      });
  };
}

export function logout(redirect) {
  return function (dispatch) {
    dispatch({
      type: LOGOUT_REQUEST,
    });
    logoutRequest()
      .then((res) => {
        if (res && res.success) {
          localStorage.removeItem("refreshToken");
          deleteCookie("token");
          dispatch({
            type: LOGOUT_SUCCESS,
          });
          redirect();
        } else {
          dispatch({
            type: LOGOUT_FAILED,
          });
        }
      })
      .catch(() => {
        dispatch({
          type: LOGOUT_FAILED,
        });
      });
  };
}

export function getToken() {
  return function (dispatch) {
    dispatch({
      type: TOKEN_REQUEST,
    });
    tokenRequest()
      .then((res) => {
        if (res && res.success) {
          const accessToken = res.accessToken.split("Bearer ")[1];
          const refreshToken = res.refreshToken;
          setCookie("token", accessToken);
          localStorage.setItem("refreshToken", refreshToken);
          dispatch({
            type: TOKEN_SUCCESS,
          });
        } else {
          logout();
          dispatch({
            type: TOKEN_FAILED,
          });
        }
      })
      .catch((e) => {
        if (e.message === "Token is invalid") {
          dispatch(getToken());
        } else {
          dispatch({
            type: TOKEN_FAILED,
          });
        }
      });
  };
}

export function getDataUser() {
  return function (dispatch) {
    dispatch({
      type: USER_REQUEST,
    });
    getDataUserRequest()
      .then((res) => {
        if (res && res.success) {
          dispatch({
            type: USER_SUCCESS,
            user: res.user,
          });
          return res;
        } else {
          dispatch({
            type: USER_FAILED,
          });
        }
      })
      .catch((e) => {
        if (e.message === "jwt expired" || e.message === "Token is invalid") {
          dispatch(getToken());
          dispatch(getDataUser());
        } else {
          dispatch({
            type: USER_FAILED,
          });
        }
      });
  };
}

export function updateDataUser(form) {
  return function (dispatch) {
    dispatch({
      type: USER_UPDATE_REQUEST,
    });
    updateDataUserRequest(form)
      .then((res) => {
        if (res && res.success) {
          dispatch({
            type: USER_UPDATE_SUCCESS,
            user: res.user,
          });
        } else {
          dispatch({
            type: USER_UPDATE_FAILED,
          });
        }
      })
      .catch((e) => {
        if (e.message === "jwt expired" || e.message === "Token is invalid") {
          dispatch(getToken());
          dispatch(updateDataUser(form));
        } else {
          dispatch({
            type: USER_UPDATE_FAILED,
          });
        }
      });
  };
}
