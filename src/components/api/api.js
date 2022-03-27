import { config } from "../../utils/constants";

export const loadDataBurgers = (state, setState) => {
  setState({ ...state, hasError: false, isLoading: true });
  fetch(`${config.baseUrl}/ingredients`)
    .then((res) => res.json())
    .then((data) => setState({ ...state, data, isLoading: false }))
    .catch(() => setState({ ...state, hasError: true, isLoading: false }));
};

export const getNumberOrder = (listId) => {
  return fetch(`${config.baseUrl}/orders`, {
    method: "POST",
    headers: config.headers,
    body: JSON.stringify({
      "ingredients": listId,
    }),
  })
};