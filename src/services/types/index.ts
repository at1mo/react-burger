import { ActionCreator } from "redux";
import { ThunkAction } from "redux-thunk";
import { TAuthActions } from "../actions/auth";
import { TConstructorActions } from "../actions/constructor";
import { TIngredientsActions } from "../actions/ingredients";
import { TOrderActions } from "../actions/order";
import { IWsActions } from "../actions/wsAction";
import { store } from "../store";

export type TRootState = ReturnType<typeof store.getState>;

export type TApplicationActions =
  | TAuthActions
  | TConstructorActions
  | TIngredientsActions
  | TOrderActions
  | IWsActions;

export type AppThunk<TReturn = void> = ActionCreator<
  ThunkAction<TReturn, TRootState, undefined, TApplicationActions>
>;

export type AppDispatch = typeof store.dispatch;
// export type AppDispatch = ActionCreator<
//   ThunkDispatch<TRootState, undefined, TApplicationActions>
// >;
