import { getNumberOrder } from "../../utils/api";
import { TOrder } from "../../utils/types";

export const GET_ORDER_REQUEST = "GET_ORDER_REQUEST";
export const GET_ORDER_SUCCESS = "GET_ORDER_SUCCESS";
export const GET_ORDER_FAILED = "GET_ORDER_FAILED";

export const OPEN_ORDER_DETAILS = "OPEN_ORDER_DETAILS";
export const CLOSE_ORDER_DETAILS = "CLOSE_ORDER_DETAILS";

export type TGetOrderRequestAction = {
  readonly type: typeof GET_ORDER_REQUEST;
};

export type TGetOrderSuccessAction = {
  readonly type: typeof GET_ORDER_SUCCESS;
  readonly order: TOrder;
};

export type TGetOrderFailedAction = {
  readonly type: typeof GET_ORDER_FAILED;
};

export type TOpenOrderDetailsAction = {
  readonly type: typeof OPEN_ORDER_DETAILS;
};

export type TCloseOrderDetailsAction = {
  readonly type: typeof CLOSE_ORDER_DETAILS;
};

export const getOrderRequest = (): TGetOrderRequestAction => ({
  type: GET_ORDER_REQUEST,
});

export const getOrderSuccess = (order: TOrder): TGetOrderSuccessAction => ({
  type: GET_ORDER_SUCCESS,
  order: order,
});

export const getOrderFailed = (): TGetOrderFailedAction => ({
  type: GET_ORDER_FAILED,
});

export const openOrderDetails = (): TOpenOrderDetailsAction => ({
  type: OPEN_ORDER_DETAILS,
});

export const closeOrderDetailsAction = (): TCloseOrderDetailsAction => ({
  type: CLOSE_ORDER_DETAILS,
});

export type TOrderActions =
  | TGetOrderRequestAction
  | TGetOrderSuccessAction
  | TGetOrderFailedAction
  | TOpenOrderDetailsAction
  | TCloseOrderDetailsAction;

export function getOrder(ingredients: Array<string>) {
  return function (dispatch: any) {
    dispatch(getOrderRequest());
    getNumberOrder(ingredients)
      .then((res) => {
        if (res && res.success) {
          dispatch(getOrderSuccess(res.order));
        } else {
          dispatch(getOrderFailed());
        }
      })
      .catch(() => {
        dispatch(getOrderFailed());
      });
  };
}
