import { Middleware, MiddlewareAPI } from "redux";
import { TWsActionsOptions } from "../store";
import { AppDispatch, TApplicationActions, TRootState } from "../types";

export const socketMiddleware = (
  wsUrl: string,
  wsActions: TWsActionsOptions
): Middleware => {
  return (store: MiddlewareAPI<AppDispatch, TRootState>) => {
    let socket: WebSocket | null = null;
    return (next) => (action: TApplicationActions) => {
      const { dispatch } = store;
      const { wsInit, wsAll, onOpen, onClose, onError, onMessage } = wsActions;
      if (action.type === wsAll) {
        socket = new WebSocket(`${wsUrl}${action.payload.endpoint}`);
      } else if (action.type === wsInit && action.payload?.token) {
        socket = new WebSocket(
          `${wsUrl}${action.payload.endpoint}?token=${action.payload.token}`
        );
      }
      if (socket) {
        socket.onopen = () => {
          dispatch({ type: onOpen });
        };

        socket.onerror = () => {
          dispatch({ type: onError });
        };

        socket.onmessage = (event) => {
          const { data } = event;
          const parsedData = JSON.parse(data);
          const { success, ...restParsedData } = parsedData;

          dispatch({ type: onMessage, payload: restParsedData });
        };

        socket.onclose = () => {
          dispatch({ type: onClose });
        };
      }

      next(action);
    };
  };
};
