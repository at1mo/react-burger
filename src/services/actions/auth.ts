import {
  forgotPasswordRequest,
  loginRequest,
  registerRequest,
  logoutRequest,
  resetPasswordRequest,
  getDataUserRequest,
  updateDataUserRequest,
} from "../../utils/api";
import { deleteCookie, setCookie } from "../../utils/cookie";
import {
  TLoginForm,
  TRedirectHistory,
  TRegisterForm,
  TResetPasswordForm,
  TUser,
} from "../../utils/types";

export const FORGOT_PASSWORD_REQUEST = "FORGOT_PASSWORD_REQUEST";
export const FORGOT_PASSWORD_FAILED = "FORGOT_PASSWORD_FAILED";
export const FORGOT_PASSWORD_SUCCESS = "FORGOT_PASSWORD_SUCCESS";

export const RESET_PASSWORD_REQUEST = "RESET_PASSWORD_REQUEST";
export const RESET_PASSWORD_FAILED = "RESET_PASSWORD_FAILED";
export const RESET_PASSWORD_SUCCESS = "RESET_PASSWORD_SUCCESS";

export const LOGIN_REQUEST = "LOGIN_REQUEST";
export const LOGIN_SUCCESS = "LOGIN_SUCCESS";
export const LOGIN_FAILED = "LOGIN_FAILED";

export const REGISTER_REQUEST = "REGISTER_REQUEST";
export const REGISTER_SUCCESS = "REGISTER_SUCCESS";
export const REGISTER_FAILED = "REGISTER_FAILED";

export const LOGOUT_REQUEST = "LOGOUT_REQUEST";
export const LOGOUT_SUCCESS = "LOGOUT_SUCCESS";
export const LOGOUT_FAILED = "LOGOUT_FAILED";

export const USER_REQUEST = "USER_REQUEST";
export const USER_SUCCESS = "USER_SUCCESS";
export const USER_FAILED = "USER_FAILED";

export const USER_UPDATE_REQUEST = "USER_UPDATE_REQUEST";
export const USER_UPDATE_SUCCESS = "USER_UPDATE_SUCCESS";
export const USER_UPDATE_FAILED = "USER_UPDATE_FAILED";

export type TForgotPasswordRequestAction = {
  readonly type: typeof FORGOT_PASSWORD_REQUEST;
};
export type TForgotPasswordSuccessAction = {
  readonly type: typeof FORGOT_PASSWORD_SUCCESS;
};
export type TForgotPasswordFailedAction = {
  readonly type: typeof FORGOT_PASSWORD_FAILED;
};

export type TResetPasswordRequestAction = {
  readonly type: typeof RESET_PASSWORD_REQUEST;
};
export type TResetPasswordSuccessAction = {
  readonly type: typeof RESET_PASSWORD_SUCCESS;
};
export type TResetPasswordFailedAction = {
  readonly type: typeof RESET_PASSWORD_FAILED;
};

export type TLoginRequestAction = {
  readonly type: typeof LOGIN_REQUEST;
};
export type TLoginSuccessAction = {
  readonly type: typeof LOGIN_SUCCESS;
  user: TUser;
};
export type TLoginFailedAction = {
  readonly type: typeof LOGIN_FAILED;
};

export type TRegisterRequestAction = {
  readonly type: typeof REGISTER_REQUEST;
};
export type TRegisterSuccessAction = {
  readonly type: typeof REGISTER_SUCCESS;
  user: TUser;
};
export type TRegisterFailedAction = {
  readonly type: typeof REGISTER_FAILED;
};

export type TLogoutRequestAction = {
  readonly type: typeof LOGOUT_REQUEST;
};
export type TLogoutSuccessAction = {
  readonly type: typeof LOGOUT_SUCCESS;
};
export type TLogoutFailedAction = {
  readonly type: typeof LOGOUT_FAILED;
};

export type TUserRequestAction = {
  readonly type: typeof USER_REQUEST;
};
export type TUserSuccessAction = {
  readonly type: typeof USER_SUCCESS;
  user: TUser;
};
export type TUserFailedAction = {
  readonly type: typeof USER_FAILED;
};

export type TUserUpdateRequestAction = {
  readonly type: typeof USER_UPDATE_REQUEST;
};
export type TUserUpdateSuccessAction = {
  readonly type: typeof USER_UPDATE_SUCCESS;
  user: TUser;
};
export type TUserUpdateFailedAction = {
  readonly type: typeof USER_UPDATE_FAILED;
};

export const forgotPasswordRequestAction =
  (): TForgotPasswordRequestAction => ({
    type: FORGOT_PASSWORD_REQUEST,
  });
export const forgotPasswordSuccess = (): TForgotPasswordSuccessAction => ({
  type: FORGOT_PASSWORD_SUCCESS,
});
export const forgotPasswordFailed = (): TForgotPasswordFailedAction => ({
  type: FORGOT_PASSWORD_FAILED,
});

export const resetPasswordRequestAction = (): TResetPasswordRequestAction => ({
  type: RESET_PASSWORD_REQUEST,
});
export const resetPasswordSuccess = (): TResetPasswordSuccessAction => ({
  type: RESET_PASSWORD_SUCCESS,
});
export const resetPasswordFailed = (): TResetPasswordFailedAction => ({
  type: RESET_PASSWORD_FAILED,
});

export const loginRequestAction = (): TLoginRequestAction => ({
  type: LOGIN_REQUEST,
});
export const loginSuccess = (user: TUser): TLoginSuccessAction => ({
  type: LOGIN_SUCCESS,
  user,
});
export const loginFailed = (): TLoginFailedAction => ({
  type: LOGIN_FAILED,
});

export const registerRequestAction = (): TRegisterRequestAction => ({
  type: REGISTER_REQUEST,
});
export const registerSuccess = (user: TUser): TRegisterSuccessAction => ({
  type: REGISTER_SUCCESS,
  user,
});
export const registerFailed = (): TRegisterFailedAction => ({
  type: REGISTER_FAILED,
});

export const logoutRequestAction = (): TLogoutRequestAction => ({
  type: LOGOUT_REQUEST,
});
export const logoutSuccess = (): TLogoutSuccessAction => ({
  type: LOGOUT_SUCCESS,
});
export const logoutFailed = (): TLogoutFailedAction => ({
  type: LOGOUT_FAILED,
});

export const userRequest = (): TUserRequestAction => ({
  type: USER_REQUEST,
});
export const userSucces = (user: TUser): TUserSuccessAction => ({
  type: USER_SUCCESS,
  user,
});
export const userFailed = (): TUserFailedAction => ({
  type: USER_FAILED,
});

export const userUpdateRequest = (): TUserUpdateRequestAction => ({
  type: USER_UPDATE_REQUEST,
});
export const userUpdateSucces = (user: TUser): TUserUpdateSuccessAction => ({
  type: USER_UPDATE_SUCCESS,
  user,
});
export const userUpdateFailed = (): TUserUpdateFailedAction => ({
  type: USER_UPDATE_FAILED,
});

export type TAuthActions =
  | TForgotPasswordRequestAction
  | TForgotPasswordSuccessAction
  | TForgotPasswordFailedAction
  | TResetPasswordRequestAction
  | TResetPasswordSuccessAction
  | TResetPasswordFailedAction
  | TLoginRequestAction
  | TLoginSuccessAction
  | TLoginFailedAction
  | TRegisterRequestAction
  | TRegisterSuccessAction
  | TRegisterFailedAction
  | TLogoutRequestAction
  | TLogoutSuccessAction
  | TLogoutFailedAction
  | TUserRequestAction
  | TUserSuccessAction
  | TUserFailedAction
  | TUserUpdateRequestAction
  | TUserUpdateSuccessAction
  | TUserUpdateFailedAction;

export function forgotPassword(email: string, redirect: TRedirectHistory) {
  return function (dispatch: any) {
    dispatch(forgotPasswordRequestAction());
    forgotPasswordRequest(email)
      .then((res) => {
        if (res && res.success) {
          dispatch(forgotPasswordSuccess());
          redirect();
        } else {
          dispatch(forgotPasswordFailed());
        }
      })
      .catch(() => {
        dispatch(forgotPasswordFailed());
      });
  };
}

export function resetPassword(
  form: TResetPasswordForm,
  redirect: TRedirectHistory
) {
  return function (dispatch: any) {
    dispatch(resetPasswordRequestAction());
    resetPasswordRequest(form)
      .then((res) => {
        if (res && res.success) {
          dispatch(resetPasswordSuccess());
          redirect();
        } else {
          dispatch(resetPasswordFailed());
        }
      })
      .catch(() => {
        dispatch(resetPasswordFailed());
      });
  };
}

export function login(form: TLoginForm) {
  return function (dispatch: any) {
    dispatch(loginRequestAction());
    loginRequest(form)
      .then((res) => {
        if (res && res.success) {
          const accessToken = res.accessToken.split("Bearer ")[1];
          const refreshToken = res.refreshToken;
          setCookie("token", accessToken);
          localStorage.setItem("refreshToken", refreshToken);
          dispatch(loginSuccess(res.user));
        } else {
          dispatch(loginFailed());
        }
      })
      .catch(() => {
        dispatch(loginFailed());
      });
  };
}

export function register(form: TRegisterForm, redirect: TRedirectHistory) {
  return function (dispatch: any) {
    dispatch(registerRequestAction());
    registerRequest(form)
      .then((res) => {
        if (res && res.success) {
          const accessToken = res.accessToken.split("Bearer ")[1];
          const refreshToken = res.refreshToken;
          setCookie("token", accessToken);
          localStorage.setItem("refreshToken", refreshToken);
          dispatch(registerSuccess(res.user));
          redirect();
        } else {
          dispatch(registerFailed());
        }
      })
      .catch(() => {
        dispatch(registerFailed());
      });
  };
}

export function logout(redirect: TRedirectHistory) {
  return function (dispatch: any) {
    dispatch(logoutRequestAction());
    logoutRequest()
      .then((res) => {
        if (res && res.success) {
          localStorage.removeItem("refreshToken");
          deleteCookie("token");
          dispatch(logoutSuccess());
          redirect();
        } else {
          dispatch(logoutFailed());
        }
      })
      .catch(() => {
        dispatch(logoutFailed());
      });
  };
}

export function getDataUser() {
  return function (dispatch: any) {
    dispatch(userRequest());
    getDataUserRequest()
      .then((res) => {
        if (res && res.success) {
          dispatch(userSucces(res.user));
        } else {
          dispatch(userFailed());
        }
      })
      .catch((e) => {
        console.log("error:", e);
      });
  };
}

export function updateDataUser(form: TRegisterForm) {
  return function (dispatch: any) {
    dispatch(userUpdateRequest());
    updateDataUserRequest(form)
      .then((res) => {
        if (res && res.success) {
          dispatch(userUpdateSucces(res.user));
        } else {
          dispatch(userUpdateFailed());
        }
      })
      .catch((e) => {
        console.log(e);
      });
  };
}
