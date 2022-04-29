import { ADD_BUN } from "../actions/constructor";

const initialState = {
  bun: [],
};

export const constructorReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_BUN: {
      return {
        ...state,
        bun: [action.payload],
      };
    }
    default:
      return state;
  }
};
