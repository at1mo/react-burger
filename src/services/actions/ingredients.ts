import { getDataBurgersFromServer } from "../../utils/api";
import { TIngredient } from "../../utils/types";
import { AppDispatch } from "../types";

export const GET_INGREDIENTS_REQUEST = "GET_INGREDIENTS_REQUEST";
export const GET_INGREDIENTS_SUCCESS = "GET_INGREDIENTS_SUCCESS";
export const GET_INGREDIENTS_FAILED = "GET_INGREDIENTS_FAILED";

export type TGetIngredientsRequestAction = {
  readonly type: typeof GET_INGREDIENTS_REQUEST;
};

export type TGetIngredientsSuccessAction = {
  readonly type: typeof GET_INGREDIENTS_SUCCESS;
  ingredients: ReadonlyArray<TIngredient>;
};

export type TGetIngredientsFailedAction = {
  readonly type: typeof GET_INGREDIENTS_FAILED;
};

export const getIngredientsRequest = (): TGetIngredientsRequestAction => ({
  type: GET_INGREDIENTS_REQUEST,
});

export const getIngredientsSuccess = (
  ingredients: Array<TIngredient>
): TGetIngredientsSuccessAction => ({
  type: GET_INGREDIENTS_SUCCESS,
  ingredients: ingredients,
});

export const getIngredientsFailed = (): TGetIngredientsFailedAction => ({
  type: GET_INGREDIENTS_FAILED,
});

export type TIngredientsActions =
  | TGetIngredientsRequestAction
  | TGetIngredientsSuccessAction
  | TGetIngredientsFailedAction;

export function getIngredients() {
  return function (dispatch: AppDispatch) {
    dispatch(getIngredientsRequest());

    getDataBurgersFromServer()
      .then((res) => {
        if (res && res.success) {
          dispatch(getIngredientsSuccess(res.data));
        } else {
          dispatch(getIngredientsFailed());
        }
      })
      .catch(() => {
        dispatch(getIngredientsFailed());
      });
  };
}
