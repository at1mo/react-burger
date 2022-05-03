import { combineReducers } from "redux";
import { ingredientsReducer } from "./ingredients";
import { constructorReducer } from "./constructor";
import { detailsReducer } from "./details";
import { orderReducer } from "./order";

// Корневой редьюсер, объединяет все редьюсеры
export const rootReducer = combineReducers({
  ingredients: ingredientsReducer,
  burgerConstructor: constructorReducer,
  details: detailsReducer,
  order: orderReducer,
});
