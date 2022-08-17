import thunk from "redux-thunk";
import { applyMiddleware, compose, createStore } from "redux";
import { rootReducer } from "./reducers";

import { socketMiddleware } from "./middleware/socketMiddleware";
import {
  WS_CONNECTION_ALL_START,
  WS_CONNECTION_CLOSED,
  WS_CONNECTION_ERROR,
  WS_CONNECTION_START,
  WS_CONNECTION_SUCCESS,
  WS_GET_ALL_MESSAGE,
  WS_GET_MESSAGE,
  WS_SEND_MESSAGE,
} from "./actions/wsAction";

const wsUrl: string = "wss://norma.nomoreparties.space/orders";

export type TWsActionsOptions = {
  readonly wsAll?: typeof WS_CONNECTION_ALL_START;
  readonly wsInit?: typeof WS_CONNECTION_START;
  readonly wsSendMessage: typeof WS_SEND_MESSAGE;
  readonly onOpen: typeof WS_CONNECTION_SUCCESS;
  readonly onClose: typeof WS_CONNECTION_CLOSED;
  readonly onError: typeof WS_CONNECTION_ERROR;
  readonly onMessage: typeof WS_GET_ALL_MESSAGE | typeof WS_GET_MESSAGE;
};

const wsActions: TWsActionsOptions = {
  wsAll: WS_CONNECTION_ALL_START,
  wsSendMessage: WS_SEND_MESSAGE,
  onOpen: WS_CONNECTION_SUCCESS,
  onClose: WS_CONNECTION_CLOSED,
  onError: WS_CONNECTION_ERROR,
  onMessage: WS_GET_ALL_MESSAGE,
};

const wsUserActions: TWsActionsOptions = {
  wsInit: WS_CONNECTION_START,
  wsSendMessage: WS_SEND_MESSAGE,
  onOpen: WS_CONNECTION_SUCCESS,
  onClose: WS_CONNECTION_CLOSED,
  onError: WS_CONNECTION_ERROR,
  onMessage: WS_GET_MESSAGE,
};

declare global {
  interface Window {
    __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose;
  }
}

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const enhancer = composeEnhancers(
  applyMiddleware(
    thunk,
    socketMiddleware(wsUrl, wsActions),
    socketMiddleware(wsUrl, wsUserActions)
  )
);

export const store = createStore(rootReducer, enhancer);
