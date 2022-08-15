import thunk, { ThunkAction } from "redux-thunk";
import { ActionCreator, applyMiddleware, compose, createStore } from "redux";
import { rootReducer } from "./reducers";
import { useSelector as baseUseSelector } from "react-redux";
import {
  TypedUseSelectorHook,
  useDispatch as baseUseDispatch,
} from "react-redux";
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
import { TGetIngredientsFailedAction, TGetIngredientsRequestAction, TGetIngredientsSuccessAction } from "./actions/ingredients";

const wsUrl: string = "wss://norma.nomoreparties.space/orders";

const wsActions = {
  wsAll: WS_CONNECTION_ALL_START,
  wsSendMessage: WS_SEND_MESSAGE,
  onOpen: WS_CONNECTION_SUCCESS,
  onClose: WS_CONNECTION_CLOSED,
  onError: WS_CONNECTION_ERROR,
  onMessage: WS_GET_ALL_MESSAGE,
};

const wsUserActions = {
  wsInit: WS_CONNECTION_START,
  wsSendMessage: WS_SEND_MESSAGE,
  onOpen: WS_CONNECTION_SUCCESS,
  onClose: WS_CONNECTION_CLOSED,
  onError: WS_CONNECTION_ERROR,
  onMessage: WS_GET_MESSAGE,
};

export type TAppState = ReturnType<typeof store.getState>;
export type TAppAction = TGetIngredientsRequestAction | TGetIngredientsSuccessAction | TGetIngredientsFailedAction;
export type TAppThunk<ReturnType = void> = ActionCreator<
  ThunkAction<ReturnType, TAppState, never, TAppAction>
>;

export type TAppDispatch = typeof store.dispatch | TAppThunk;
export const useDispatch: () => TAppDispatch = baseUseDispatch;
export const useSelector: TypedUseSelectorHook<TAppState> = baseUseSelector;

const composeEnhancers =
  // @ts-ignore
  typeof window === "object" && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    ? // @ts-ignore
      window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({})
    : compose;

const enhancer = composeEnhancers(
  applyMiddleware(
    thunk,
    socketMiddleware(wsUrl, wsActions),
    socketMiddleware(wsUrl, wsUserActions)
  )
);

export const store = createStore(rootReducer, enhancer);
