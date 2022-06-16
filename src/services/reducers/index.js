import { combineReducers } from "redux";
import { ingredientsReducer } from "./ingredients";
import { constructorReducer } from "./constructor";
import { orderReducer } from "./order";
import { authReducer } from "./auth";
import { wsReducer } from "./wsReducer";

// Корневой редьюсер, объединяет все редьюсеры
export const rootReducer = combineReducers({
  ingredients: ingredientsReducer,
  burgerConstructor: constructorReducer,
  order: orderReducer,
  auth: authReducer,
  ws: wsReducer,
});
