import { TIngredient } from "../../utils/types";

export const ADD_BUN = "ADD_BUN";
export const ADD_FILLING = "ADD_FILLING";
export const DELETE_FILLING = "DELETE_FILLING";
export const MOVE_ITEM = "MOVE_ITEM";
export const RESET_CONSTRUCTOR = "RESET_CONSTRUCTOR";
export const GENERATE_ID = "GENERATE_ID";

export type TAddBunAction = {
  readonly type: typeof ADD_BUN;
  id: string;
  payload: TIngredient;
};

export type TAddFillingAction = {
  readonly type: typeof ADD_FILLING;
  id: string;
  payload: TIngredient;
};

export type TDeleteFillingAction = {
  readonly type: typeof DELETE_FILLING;
  index: number;
};

export type TMoveItemAction = {
  readonly type: typeof MOVE_ITEM;
  dragIndex: number;
  hoverIndex: number;
};

export type TResetConstructorAction = {
  readonly type: typeof RESET_CONSTRUCTOR;
};

export type TGenerateIdAction = {
  readonly type: typeof GENERATE_ID;
  payload: string;
};

export type TConstructorActions =
  | TAddBunAction
  | TAddFillingAction
  | TDeleteFillingAction
  | TMoveItemAction
  | TResetConstructorAction
  | TGenerateIdAction;

export const addBunAction = (
  id: string,
  payload: TIngredient
): TAddBunAction => ({
  type: ADD_BUN,
  id,
  payload,
});

export const addFillingAction = (
  id: string,
  payload: TIngredient
): TAddFillingAction => ({
  type: ADD_FILLING,
  id,
  payload,
});

export const deleteFillingAction = (index: number): TDeleteFillingAction => ({
  type: DELETE_FILLING,
  index,
});

export const moveItemAction = (
  dragIndex: number,
  hoverIndex: number
): TMoveItemAction => ({
  type: MOVE_ITEM,
  dragIndex,
  hoverIndex,
});

export const resetConstructorAction = (): TResetConstructorAction => ({
  type: RESET_CONSTRUCTOR,
});

export const generateIdAction = (payload: string): TGenerateIdAction => ({
  type: GENERATE_ID,
  payload,
});
