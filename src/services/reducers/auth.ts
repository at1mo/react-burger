import {
  FORGOT_PASSWORD_FAILED,
  FORGOT_PASSWORD_REQUEST,
  FORGOT_PASSWORD_SUCCESS,
  RESET_PASSWORD_FAILED,
  RESET_PASSWORD_REQUEST,
  RESET_PASSWORD_SUCCESS,
  LOGIN_FAILED,
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
  REGISTER_FAILED,
  REGISTER_REQUEST,
  REGISTER_SUCCESS,
  LOGOUT_FAILED,
  LOGOUT_REQUEST,
  LOGOUT_SUCCESS,
  USER_REQUEST,
  USER_FAILED,
  USER_SUCCESS,
  USER_UPDATE_REQUEST,
  USER_UPDATE_FAILED,
  USER_UPDATE_SUCCESS,
  TAuthActions,
} from "../actions/auth";

type TAuthState = {
  name: string;
  email: string;
  forgotPasswordRequest: boolean;
  forgotPasswordFailed: boolean;
  resetPasswordRequest: boolean;
  resetPasswordFailed: boolean;
  loginRequest: boolean;
  loginFailed: boolean;
  registerRequest: boolean;
  registerFailed: boolean;
  logoutRequest: boolean;
  logoutFailed: boolean;
  authRequest: boolean;
  authFailed: boolean;
};

const initialState: TAuthState = {
  name: "",
  email: "",

  forgotPasswordRequest: false,
  forgotPasswordFailed: false,
  resetPasswordRequest: false,
  resetPasswordFailed: false,
  loginRequest: false,
  loginFailed: false,
  registerRequest: false,
  registerFailed: false,
  logoutRequest: false,
  logoutFailed: false,
  authRequest: false,
  authFailed: false,
};

export const authReducer = (
  state = initialState,
  action: TAuthActions
): TAuthState => {
  switch (action.type) {
    case FORGOT_PASSWORD_REQUEST: {
      return {
        ...state,
        forgotPasswordRequest: true,
      };
    }
    case FORGOT_PASSWORD_SUCCESS: {
      return {
        ...state,
        forgotPasswordRequest: false,
        forgotPasswordFailed: false,
      };
    }
    case FORGOT_PASSWORD_FAILED: {
      return {
        ...state,
        forgotPasswordRequest: false,
        forgotPasswordFailed: true,
      };
    }
    case RESET_PASSWORD_REQUEST: {
      return {
        ...state,
        resetPasswordRequest: true,
      };
    }
    case RESET_PASSWORD_SUCCESS: {
      return {
        ...state,
        resetPasswordRequest: false,
        resetPasswordFailed: false,
      };
    }
    case RESET_PASSWORD_FAILED: {
      return {
        ...state,
        resetPasswordRequest: false,
        resetPasswordFailed: true,
      };
    }
    case LOGIN_REQUEST: {
      return {
        ...state,
        loginRequest: true,
      };
    }
    case LOGIN_SUCCESS: {
      return {
        ...state,
        loginRequest: false,
        loginFailed: false,
        name: action.user.name,
        email: action.user.email,
      };
    }
    case LOGIN_FAILED: {
      return {
        ...state,
        loginRequest: false,
        loginFailed: true,
      };
    }
    case REGISTER_REQUEST: {
      return {
        ...state,
        registerRequest: true,
      };
    }
    case REGISTER_SUCCESS: {
      return {
        ...state,
        registerRequest: false,
        registerFailed: false,
        name: action.user.name,
        email: action.user.email,
      };
    }
    case REGISTER_FAILED: {
      return {
        ...state,
        registerRequest: false,
        registerFailed: true,
      };
    }
    case LOGOUT_REQUEST: {
      return {
        ...state,
        logoutRequest: true,
      };
    }
    case LOGOUT_SUCCESS: {
      return {
        ...initialState,
        logoutRequest: false,
        logoutFailed: false,
      };
    }
    case LOGOUT_FAILED: {
      return {
        ...state,
        logoutRequest: false,
        logoutFailed: true,
      };
    }
    case USER_REQUEST: {
      return {
        ...state,
        authRequest: true,
      };
    }
    case USER_SUCCESS: {
      return {
        ...state,
        authRequest: false,
        authFailed: false,
        name: action.user.name,
        email: action.user.email,
      };
    }
    case USER_FAILED: {
      return {
        ...state,
        authRequest: false,
        authFailed: true,
      };
    }
    case USER_UPDATE_REQUEST: {
      return {
        ...state,
        authRequest: true,
      };
    }
    case USER_UPDATE_SUCCESS: {
      return {
        ...state,
        authRequest: false,
        authFailed: false,
        name: action.user.name,
        email: action.user.email,
      };
    }
    case USER_UPDATE_FAILED: {
      return {
        ...state,
        authRequest: false,
        authFailed: true,
      };
    }

    default: {
      return state;
    }
  }
};
