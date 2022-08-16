import { TOrder } from "../../utils/types";
import {
  GET_ORDER_REQUEST,
  GET_ORDER_SUCCESS,
  GET_ORDER_FAILED,
  OPEN_ORDER_DETAILS,
  CLOSE_ORDER_DETAILS,
  TOrderActions,
} from "../actions/order";

type TOrderState = {
  order: TOrder | null;
  orderRequest: boolean;
  orderFailed: boolean;
  isOpen: boolean;
};

const initialState: TOrderState = {
  order: null,
  orderRequest: false,
  orderFailed: false,
  isOpen: false,
};

export const orderReducer = (
  state = initialState,
  action: TOrderActions
): TOrderState => {
  switch (action.type) {
    case GET_ORDER_REQUEST: {
      return {
        ...state,
        orderRequest: true,
      };
    }
    case GET_ORDER_SUCCESS: {
      return {
        ...state,
        orderFailed: false,
        order: action.order,
        orderRequest: false,
      };
    }
    case GET_ORDER_FAILED: {
      return {
        ...state,
        orderFailed: true,
        orderRequest: false,
      };
    }
    case OPEN_ORDER_DETAILS: {
      return {
        ...state,
        isOpen: true,
      };
    }
    case CLOSE_ORDER_DETAILS: {
      return {
        ...state,
        isOpen: false,
        order: null,
      };
    }
    default: {
      return state;
    }
  }
};
