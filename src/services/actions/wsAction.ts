import { IOdersData } from "../../utils/types";
import { TWsState } from "../reducers/wsReducer";

export const WS_CONNECTION_START = "WS_CONNECTION_START";
export const WS_CONNECTION_SUCCESS = "WS_CONNECTION_SUCCESS";
export const WS_CONNECTION_ERROR = "WS_CONNECTION_ERROR";
export const WS_CONNECTION_CLOSED = "WS_CONNECTION_CLOSED";
export const WS_GET_MESSAGE = "WS_GET_MESSAGE";
export const WS_SEND_MESSAGE = "WS_SEND_MESSAGE";

export const WS_CONNECTION_ALL_START = "WS_CONNECTION_ALL_START";
export const WS_GET_ALL_MESSAGE = "WS_GET_ALL_MESSAGE";

export type TWsConnectionStartAction = {
  readonly type: typeof WS_CONNECTION_START;
  payload: {
    token: string;
    endpoint: string;
  };
};

export type TWsConnectionSuccessAction = {
  readonly type: typeof WS_CONNECTION_SUCCESS;
};

export type TWsConnectionErrorAction = {
  readonly type: typeof WS_CONNECTION_ERROR;
};

export type TWsConnectionClosedAction = {
  readonly type: typeof WS_CONNECTION_CLOSED;
};

export type TWsGetMessageAction = {
  readonly type: typeof WS_GET_MESSAGE;
  payload: IOdersData;
};

export type TWsSendMessageAction = {
  readonly type: typeof WS_SEND_MESSAGE;
  payload: TWsState;
};

export type TWsConnectionAllStartAction = {
  readonly type: typeof WS_CONNECTION_ALL_START;
  payload: {
    endpoint: string;
  };
};

export type TWsGetAllMessageAction = {
  readonly type: typeof WS_GET_ALL_MESSAGE;
  payload: IOdersData;
};

export type IWsActions =
  | TWsConnectionStartAction
  | TWsConnectionSuccessAction
  | TWsConnectionErrorAction
  | TWsConnectionClosedAction
  | TWsGetMessageAction
  | TWsSendMessageAction
  | TWsConnectionAllStartAction
  | TWsGetAllMessageAction;

export const wsConnectionStart = (
  token: string,
  endpoint: string = ""
): TWsConnectionStartAction => ({
  type: WS_CONNECTION_START,
  payload: { endpoint, token },
});

export const wsConnectionSuccess = (): TWsConnectionSuccessAction => ({
  type: WS_CONNECTION_SUCCESS,
});

export const wsConnectionError = (): TWsConnectionErrorAction => ({
  type: WS_CONNECTION_ERROR,
});

export const wsConnectionClosed = (): TWsConnectionClosedAction => ({
  type: WS_CONNECTION_CLOSED,
});

export const wsGetMessage = (message: IOdersData): TWsGetMessageAction => {
  return {
    type: WS_GET_MESSAGE,
    payload: message,
  };
};

export const wsSendMessage = (message: TWsState): TWsSendMessageAction => {
  return {
    type: WS_SEND_MESSAGE,
    payload: message,
  };
};

export const wsConnectionAllStart = (
  endpoint: string = ""
): TWsConnectionAllStartAction => ({
  type: WS_CONNECTION_ALL_START,
  payload: { endpoint },
});

export const wsGetAllMessage = (
  message: IOdersData
): TWsGetAllMessageAction => {
  return {
    type: WS_GET_ALL_MESSAGE,
    payload: message,
  };
};
